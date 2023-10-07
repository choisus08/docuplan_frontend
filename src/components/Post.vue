<template>
    <div v-for="appt in appointments" class="card" :key="appt.id" >
        <router-link :to="{ name: 'Show', params: { id: appt.id } }">
            <h2 class="apptLink">{{ appt.appointment_title }}</h2>
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
.apptLink {
    color: rgb(137, 34, 171);
}

.card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    color: rgb(134, 131, 131);
}

</style>