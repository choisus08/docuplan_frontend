<template>
    <div v-for="appt in formattedAppts" class="card" :key="appt.id" >
        <router-link :to="{ name: 'Show', params: { id: appt.id } }">
            <h2 class="apptLink">{{ appt.appointment_title }}</h2>
        </router-link>
        <div class="cardInfo">
        <h3>{{ appt.date }}</h3>
        <h3>{{ appt.time }}</h3>
        <h3>{{ appt.doctor_name }}</h3>
        </div>
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
                const amPm = hours >= 12 ? 'PM' : 'AM' // ternary if hour >=12 then 'pm', else 'am'
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
    margin: 1.4em 0 3.2em 0;
    color: rgb(5, 119, 161);
    font-size: 22px;
}

.card {
    margin: 30px auto;
    color: rgb(5, 119, 161);
    width: 10em;
    height: 16em;
    background-image: url('../../public/clipboard2.png');
    background-size: 300px 320px;
    background-position: center;
}

h3 {
    margin: .4em;
}

.cardInfo {
    font-size: 15px;
}


</style>