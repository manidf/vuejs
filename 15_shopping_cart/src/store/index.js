import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

// create VueX store using Vuex store Constructor
// 5 options, state, mutations, getters, actions, modules
export default new Vuex.Store({
    state: { // data
        products: []
    },

    getters: { // computed properties
        // similar as computed properties
        availableProducts (state, getters) {
            return state.products.filter(product => product.inventory > 0)
        }
    },

    actions: { // api calls
        fetchProducts (context) {
            // run setProducts mutation, be simple as possible, actions never update state directly
            shop.getProducts(products => {

                // commit the mutation using mutation fn name, and the payload
                context.commit('setProducts', products)
    
                // BAD never update the state directly like this, rather CALL mutations
                // store.state.products = products
            }) 
        },

        addToCart () {
            if (products.inventory > 0) {
                context.commit('pushProductToCart', product)
            } else {
                /// show out of stock message
            }
        }
    },

    mutations: { // update the state, single state changes, updating/setting products array
        setProducts (state, products) {
            // update state/product
            state.products = products
        }
    }
})