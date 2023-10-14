<template>
   <nav class="navbar">
        <router-link :to="{name: 'Index'}" class="headerLink">
            <img class="logo" src="../../public/logo1.png" alt="logo" /> 
            <h1 class="header">Doc UPlan</h1>

        </router-link>

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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em

}

.logo {
    width: 80px;
    height: 80px;
    padding: 0 1em 0 0 
}

@media screen and (max-width: 600px) {
    .header{
        width: 100px;
        font-size: 40px;
    }

}

</style>