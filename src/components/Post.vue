<template>
    <div v-for="appt in appointments" class="card" :key="appt.id" >
        <router-link :to="{ name: 'Show', params: { id: appt.id } }">
            <h2>{{ appt.appointment_title }}</h2>
        </router-link>
        <h3>{{ appt.date }}</h3>
        <h3>{{ appt.time }}</h3>
        <h3>{{ appt.doctor_name }}</h3>
    </div>
</template>

<script>

    export default {
        name: "Post",
        props: ['fetchAppts', 'appointments'],
        mounted() {
            // console.log('onmount here')
            this.fetchAppts()
        }
    }
</script>

<style>


</style>