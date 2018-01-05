<template>
    <div>
        <p>{{ quote }}</p>
    </div>  
</template>

<script>
    export default {
        name: 'Quote',
        props: ['quote']
    }
</script>

<style scoped>
    div {
        border: 1px solid #eee;
        box-shadow:  1px 1px 2px #444;
    }
</style>
