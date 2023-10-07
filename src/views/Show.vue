<template>
    <h2>Show page</h2>
    <p>The show id is for {{ id }}</p>

</template>

<script>
    export default {
        name: "Show",
        props: ['id'],



        // use below if omit props: ['id']
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // }
        
    }
</script>

<style scoped>

</style>