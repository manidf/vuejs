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
        availableProducts (state, getters) { // similar as computed properties
            return state.products.filter(product => product.inventory > 0)
        }
    },

    actions: { // api calls
        fetchProducts ({commit}) { // es6 argument destructuring 
           return new Promise((resolve, reject) => {
               shop.getProducts(products => { // run setProducts mutation, be simple as possible, actions never update state directly          
                    commit('setProducts', products) // commit the mutation using mutation fn name, and the payload                    
                    resolve()
                    // store.state.products = products // BAD never update the state directly like this, rather CALL mutations
                })
           })
        },

        // addToCart () {
        //     if (products.inventory > 0) {
        //         context.commit('pushProductToCart', product)
        //     } else {
        //         /// show out of stock message
        //     }
        // }
    },

    mutations: { // update the state, single state changes, updating/setting products array
        setProducts (state, products) {            
            state.products = products // update state/product
        }
    }
})

// actions decide when a mutation should fire