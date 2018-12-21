<template>
    <div>
        <h1>Product List</h1>
        <img
            v-if="loading" 
            src="//i.imgur.com/JfPpwOA.gif" alt="Loading..."
            >
        <ul v-else>
            <li v-for="product in products" :key=product.id>
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>    
</template>

<script>
import store from '@/store/index'

export default {
    data () { // Don't need the data anymore as it is now stored in the Store
        return {
            loading: false
        }
    },

    computed: {
        products () {
            return store.getters.availableProducts
            // generic return all
            // return store.state.products
        }
    },

    created() {
        this.loading = true //set loading to true until promise is resolved
        // call the store dispatch action, decouple components from the api logic
        store.dispatch('fetchProducts')
            .then(() => this.loading = false) //set to false when promise resolved
    }

}
</script>

<style>

</style>
