import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // central store, where we store our application state
    // can be accessed by child components
    state: { // object to store our properties
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            // a function that gets the state as an argument, now components can call this getter method.
            return state.counter * 2
        }
    }
});