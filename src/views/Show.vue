<template>
    <button @click="redirect">Home</button>
    <h2>Show page</h2>
    <p>The show id is for {{ id }}</p>
    <h2>Appointment Type:</h2>
    <h2>Doctor:</h2>
    <h2>Specialist:</h2>
    <h2>Date:</h2>
    <h2>Time:</h2>
    <h2>Doctor:</h2>
    <h2>Address:</h2>

    <!-- <h3>{{ appointment.doctor_name }}</h3>
    <h3>{{ appt.doctor_specialist }}</h3>
    <h3>{{ appt.date }}</h3>
    <h3>{{ appt.time }}</h3>
    <h3>{{ appt.address }}</h3>
    <h3>{{ appt.notes }}</h3>
    
 -->

    <h2>Update Form</h2>
    <form class="form">
        <div class="input" >
            <label>Appointment Title</label>
            <input v-model="appointment_title" type="text" placeholder="Physical" required />
            <label>Doctor Name</label>
            <input v-model="doctor_name" type="text" />
            <label>Specialist</label>
            <input v-model="doctor_specialist" type="text" />
            <label>Date</label>
            <input v-model="date" type="date" required />
            <label>Time</label>
            <input v-model="time" type="time" required />
            <label>Address</label>
            <input v-model="address" type="text" />
            <label>Notes</label>
            <input v-model="notes" type="text" /> 
            <input class="checkbox" type="checkbox" v-model="newApptHighPriority"/> 
            <label class="priority">High Priority</label>
        </div> 
    </form>

    <button @click="updateAppt">Update</button>
    <button>Delete</button>
</template>

<script>
    import url from '../url'
    import {ref} from 'vue'


    const newApptHighPriority = ref(false)

    export default {
        name: "Show",
        props: ['id', 'fetchAppts'],
        data() {
            return {
                appointment_title: '',
                doctor_name: '',
                doctor_specialist: '',
                address: '',
                date: '',
                time: '',
                notes: '',
                newApptHighPriority: false
             }
        },
        methods: {
            
            // update appointment
            // async updateAppt() {
                
            //     const updatedAppt = {
            //         appointment_title: this.appointment_title,
            //         doctor_name: this.doctor_name,
            //         doctor_specialist: this.doctor_specialist,
            //         address: this.address,
            //         date: this.date,
            //         time: this.time,
            //         notes: this.notes, 
            //     } 
            //     const baseUrl = `${url}`
            //     const id = this.$route.params.id
            //     const response = await fetch(baseUrl + id, {
            //         method: "PUT",
            //         headers: {
            //             "Content-Type": "applications/json"
            //         },
            //         body: JSON.stringify(updatedAppt)
            //     })
            //     const data = await response.json()
            //     this.updatedAppt = data.updatedAppt
            // },

            // redirect route back to index page (homepage) for home btn
            redirect() {
                this.$router.push({ name: 'Index'})
            },
        }


        // use below if omit props: ['id']
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // }
        
    }
</script>

<style scoped>
form {
    width: 400px;
    margin: 3em auto;
    background-color: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    color: rgb(187, 185, 185)
}

label {
    display: inline-block;
    margin: 15px 0 15px;
    font-size: .8em;
    text-transform: uppercase;
    font-weight: bold;
    
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    border-bottom: 1px solid #ddd;
    background-color: gray;
    
}

.checkbox {
    margin: 2em 1em 0 0;
    width: 1em;
    display: inline;
    
}

</style>