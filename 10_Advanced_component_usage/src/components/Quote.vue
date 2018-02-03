<template>
    <div>
        <slot></slot>
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
        padding:  2em;
        border: 1px solid #eee;
        box-shadow:  1px 1px 2px #444;
    }
    h1 {
        color: green;
    }
</style>
