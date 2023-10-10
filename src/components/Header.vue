<template>
   <nav class="navbar">
        <router-link :to="{name: 'Index'}" class="headerLink"><h1 class="header">Doc UPlan</h1></router-link>

   </nav>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
.headerLink {
    color: white;
}


</style>