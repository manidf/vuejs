<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h1>My title</h1>
                   <p>some text</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    export default {
        components: {
            appQuote: Quote
        }
    }
</script>

<style>
</style>
