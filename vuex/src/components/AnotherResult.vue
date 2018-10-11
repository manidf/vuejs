<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([ // spread operator pull and creat seperate key value pairs out of mapped getters
                'doubleCounter',
                'stringCounter'
            ])
        }
    }
</script>