<template>
    <!-- <button @click="redirect">Home</button> -->
<div class="showContainer">
    <div class="apptDetails">
        <h2>Appointment: {{ appointment.appointment_title }}</h2>
        <h2>Doctor: {{ appointment.doctor_name}}</h2>
        <h2>Specialist: {{ appointment.doctor_specialist}}</h2>
        <h2>Date: {{ appointment.date}}</h2>
        <h2>Time: {{ appointment.time }}</h2>
        <h2>Address: {{ appointment.address}}</h2>
        <h2>Notes: {{appointment.notes }}</h2>
    </div>

    <form @submit.prevent="updateAppt">
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
            <input class="checkbox" type="checkbox" v-model="apptPriority"/> 
            <label class="priority">High Priority</label>
        </div> 
        <div class="buttons">
            <button class="updateBtn">Update</button>
            <button class="deleteBtn" @click="deleteAppt">Delete</button>
        </div>
    </form>
</div>
</template>

<script>
    import url from '../url'
    import {ref} from 'vue'

    const apptPriority = ref(false)

    export default {
        name: "Show",
        props: ['id', 'fetchAppts'],
        data() {
            return {
                appointment: {}, // initialize empty object for appt data
                appointment_title: '',
                doctor_name: '',
                doctor_specialist: '',
                address: '',
                date: '',
                time: '',
                notes: '',
                apptPriority: false
             }
        },
        async mounted() {
            await this.fetchApptData()
        },
        methods: {
            // get appointment data
            async fetchApptData() {
                try {
                    const baseUrl = `${url}`
                    const id = this.id
                    const response = await fetch(baseUrl + id)
                    const data = await response.json()
                    this.appointment = data //populate appointment data

                    // initialize form fields w/ appointment data
                    this.appointment_title = data.appointment_title
                    this.doctor_name = data.doctor_name
                    this.doctor_specialist = data.doctor_specialist
                    this.address = data.address
                    this.date = data.date
                    this.time = data.time
                    this.notes = data.notes
                    this.newApptHighPriority = data.newApptHighPriority
                }catch (error) {
                    console.error('Error fetching appointment data:', error)
                }
            },

            async updateAppt() {
                try {
                    const baseUrl = `${url}`
                    const id = this.id
                    const updatedAppt = {
                        appointment_title: this.appointment_title,
                        doctor_name: this.doctor_name,
                        doctor_specialist: this.doctor_specialist,
                        address: this.address,
                        date: this.date,
                        time: this.time,
                        notes: this.notes,
                        newApptHighPriority: this.newApptHighPriority,
                    }
                
                    const response = await fetch(baseUrl + id, {
                        method: "PUT",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(updatedAppt)
                    })

                    if (response.ok) {
                        // fetch the updated appointment data & update the 'appointment' data property
                        await this.fetchApptData()
                        console.log('Appointment updated successfully')
                    } else { 
                    console.error('Failed to update appointment')
                    }
                } catch(error) {
                    console.error('Error updating appointment:', error)
                    }
                
            },
            
            async deleteAppt() {
                try {
                    const baseUrl = `${url}`
                    const id = this.id
                    const response = await fetch(baseUrl + id, {
                        method: "DELETE"
                    }) 
                if (response.ok) {
                    console.log('Appointment deleted')
                    // redirect back to index(homepage) 
                    this.$router.push({ name: 'Index'}) 
                } else {
                    console.error('Failed to delete appointment')
                 }
                } catch (error) {
                    console.error('Error deleting appointment:', error)
                 }            
            },

            // redirect route back to index page (homepage); use for home btn
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
.showContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 0 0 0;
    gap: 5em;
}

.apptDetails {
    border: 1px solid white;
    border-radius: 10px;
    padding: 1.5em;
    height: auto;
    width: 350px;
    text-align: left;
    margin: 3em 0 0 0;
    color: rgb(134, 131, 131);
    background-color: white;
    box-shadow: 6px 6px 5px rgb(83, 82, 82);
}

form {
    width: 400px;
    margin: 3em auto;
    background-color: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    color: rgb(187, 185, 185);
    margin: 0

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

.buttons {
    display: flex;
    gap: 1em;
    justify-content: center;
    margin: 1.5em 0 0 0;
}

.updateBtn, .deleteBtn {
    background-color: #646cff;
}

@media screen and (max-width: 600px) {

.showContainer {
    display: block;
    align-items: center;
    margin: auto;
    }
.apptDetails {
    width: 50vw;
    margin: 0 0 3em 2.5em;
    text-align: center;
    box-shadow: none;

}
    
form {
    height: auto;
    width: 50vw;
    margin: auto
}
}

</style>