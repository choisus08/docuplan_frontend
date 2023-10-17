<template>
    <div v-for="appt in formattedAppts" class="card" :key="appt.id" >
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
        computed: {
            formattedAppts() {
                return this.appointments.map(appointment => ({
                    // spread operator to copy all properties of 'appointment' object
                    ...appointment,
                    // modify 'time' property
                    time: this.formatTime(appointment.time),
                }))
            }
        },
        methods: {
            formatTime(time) {
                if (!time) return '' // Handle empty time
                const [hours, minutes] = time.split(':').map(Number) // converts hours & mins subtrings into numbers
                const amPm = hours >= 12 ? 'pm' : 'am' // ternary if hour >=12 then 'pm', else 'am'
                const convertTo12Hr = hours % 12 === 0 ? '12' : (hours % 12).toString()
                return `${convertTo12Hr}:${minutes.toString().padStart(2, '0')} ${amPm}`
            }
        },
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
    width: 10em;
    box-shadow: 6px 6px 5px rgb(83, 82, 82);
}

</style>