<template>
    <NewForm :fetchAppts="fetchAppts" />
    <div class="divider"></div>
    <h2 class="myappts">MY APPOINTMENTS</h2>
    <div class="cardGrid">
      <Post :fetchAppts="fetchAppts" :appointments="appointments"/>
    </div>
</template>

<script>
    import Post from '../components/Post.vue'
    import NewForm from '../components/NewForm.vue'
    import Show from '../views/Show.vue'
    import url from '../url'

    export default {

        name: "Index",
        components: {
            Post,
            NewForm,
            Show 
        },
        data() {
            return {
                appointments: [],
            }
        },
        // computed: {
        //     formattedAppts() {
        //         return this.appointments.map(appointment => ({
        //             // spread operator to copy all properties of 'appointment' object
        //             ...appointment,
        //             // modify 'time' property
        //             time: this.formatTime(appointment.time),
        //         }))
        //     }
        // },
        methods: {
            fetchAppts() {
            // GET appts
                // console.log('test onMounted')
                 fetch(url)
                .then((response) => response.json())
                .then(data => {
                // console.log(data)
                this.appointments = data 
                // console.log(appts.value)
                })
                .catch(error => {
                alert('There is an error')
            })
        },
        // formatTime(time) {
        //     // format to am/pm
        //     if(!time) return '' // handle empty time
        //     const [hours, minutes] = time.split(':').map(Number)
        //     const amPm = hours >= 12 ? 'pm' : 'am'
        //     const convertTo12Hr = hours % 12 === 0 ? '12' : (hours % 12).toString()
        //     return `${convertTo12Hr}:${minutes.toString().padStart(2, '0')} ${amPm}`
        // }
    }
}

</script>

<style>
.cardGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.myappts {
    color: white;
    margin: 0 0 2em 0

}
.divider {
    border-top: 2px solid darkgray;
    margin: 4em 0
}

</style>
