<template>
    <h2>Show page</h2>
    <p>The show id is for {{ id.appointment_title }}</p>
    <!-- <h3>{{ appt.date }}</h3>
    <h3>{{ appt.time }}</h3>
    <h3>{{ appt.doctor_name }}</h3> -->

    <button @click="redirect">Home</button>

</template>

<script>

    export default {
        name: "Show",
        props: ['id', 'appointments'],
        methods: {
            redirect() {
                this.$router.push({ name: 'Index'})
            }

        }
        // data() {
        //     return {
        //         id: {
        //             appointment_title: '',
        //             doctor_name: '',
        //             doctor_specialist: '',
        //             address: '',
        //             date: '',
        //             time: '',
        //             notes: '',
        //         }
        //     }
        // }

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