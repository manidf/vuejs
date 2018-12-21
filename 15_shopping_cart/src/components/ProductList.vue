<template>
    <div>
        <h1>Product List</h1>
        <img
            v-if="loading" 
            src="//i.imgur.com/JfPpwOA.gif" alt="Loading..."
            >
        <ul v-else>
            <li v-for="product in products" :key=product.id>

                {{ product.title }} - {{ product.price }} <br>

                <button @click="addProductToCart(product)">
                    Add to cart
                </button>

            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            loading: false
        }
    },

    computed: {
        products () {
            return this.$store.getters.availableProducts
        }
    },

    methods: {
        addProductToCart (product) {
            this.$store.dispatch('addProductToCart', product)
        }
    },

    created() {
        this.loading = true //set loading to true until promise is resolved
        this.$store.dispatch('fetchProducts') // call the store dispatch action, decouple components from the api logic
            .then(() => this.loading = false) //set to false when promise resolved
    }
}
</script>

<style>

</style>
