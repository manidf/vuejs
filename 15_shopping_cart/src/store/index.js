import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

// create VueX store using Vuex store Constructor
// 5 options, state, mutations, getters, actions, modules
export default new Vuex.Store({
    state: { // data
        products: [],
        cart: [] // add cart array to state, store objects holding id and the item user wants to buy.
    },

    getters: { // computed properties        
        availableProducts (state, getters) { // similar as computed properties
            return state.products.filter(product => product.inventory > 0)
        },

        cartProducts (state) {
            return state.cart.map(cartItem => {
                const product = state.products.find(product => product.id === cartItem.id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        },

        cartTotal (state, getters) {
            let total = 0
            getters.cartProducts.forEach(product => {
                total += product.price * product.quantity
            })
            return total
            // can use reduce
            // return getters.cartProducts.reduce((total, product) => 
            //     total + product.price * product.quantity, 0)
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

        addProductToCart (context, product) { // responsible for the logic
            if (product.inventory > 0) {               
                const cartItem = context.state.cart.find(item => item.id === product.id)
                if ( !cartItem) {
                    context.commit('pushProductToCart', product.id)            
                } else {
                    context.commit('incrementItemQuantity', cartItem)                
                }
                context.commit('decrementProductInventory', product)
            }
        }
    },

    mutations: { // responsible for the state change
        setProducts (state, products) { // update the state, single state changes, updating/setting products array
            state.products = products // update state/product
        },

        pushProductToCart (state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },

        incrementItemQuantity (state, cartItem) {
            cartItem.quantity++
        },

        decrementProductInventory (state, product) {
            product.inventory--
        }

    }
})

// actions decide when a mutation should fire
// if you dont commit the mutations you lose benefit of tracking state changes.