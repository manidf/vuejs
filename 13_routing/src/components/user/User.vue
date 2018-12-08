<template>
    <div>
        <h1>The User Page</h1>
        <p>Loaded ID: {{ id }}</p>
        <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
        this.$router.push({ path: "home" });
        }
    }
};
</script>
