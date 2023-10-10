<template>
   <nav class="navbar">
        <router-link :to="{name: 'Index'}" class="headerLink"><h1 class="header">Doc UPlan</h1><img class="stethoscope" src="../../public/stethoscope.png" alt="stethoscope" />
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

.stethoscope {
    width: 85px;
    height: 85px
}

</style>