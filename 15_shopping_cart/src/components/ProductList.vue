<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products" :key=product.id>
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>    
</template>

<script>
import shop from '@/api/shop'
import store from '@/store/index'

export default {
    // data () { // Don't need the data anymore as it is now stored in the Store
    //     return {
    //         products: []
    //     }
    // },

    computed: {
        products () {
            return store.getters.availableProducts
            // generic return all
            // return store.state.products
        }
    },

    created() {
        
    }

}
</script>

<style>

</style>
