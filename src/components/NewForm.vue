<template>
    <form class="form">
        <div class="input" >
            <label>Appointment Title</label>
            <input v-model="appointment_title" type="text" placeholder="Physical" required />
            <label>Doctor Name</label>
            <input v-model="doctor_name" type="text" />
            <label>Doctor Specialist</label>
            <input v-model="doctor_specialist" type="text" placeholder="Family Practitionor" />
            <label>Address</label>
            <input v-model="address" type="text" />
            <label>Date</label>
            <input v-model="date" type="date" required />
            <label>Time</label>
            <input v-model="time" type="time" required />
            <label>Notes</label>
            <input v-model="notes" type="text" placeholder="Notes" /> 
            <input class="checkbox" type="checkbox" v-model="newApptHighPriority"/> 
            <label class="priority">High Priority</label>
        </div> 
               
            
            <button v-on="addAppt" class="addBtn">+</button>
    </form>
</template>

<script>
    import {ref} from 'vue'
    import url from '../url'

    const newApptHighPriority = ref(false)
    const newAppt = ''

    export default {
        data() {
            return {
            appointment_title: '',
            doctor_name: '',
            doctor_specialist: '',
            address: '',
            date: '',
            time: '',
            notes: '',
            appointments: [],
            newAppt: '',
            newApptHighPriority
        
            }
        },
        methods: {
            // Add new appt
            addAppt() {
                this.appts.push(this.newAppt)
                this.newAppt = ''

            }
        }
        
        // methods: {
        //     // Add new appt
        //     addAppt: function() {
        //         this.appointments.push(this.newAppointment)
        //         this.newAppointment = ''
        //         console.log(addAppt())
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

button {
    display: block;
    margin: auto;
    background-color:  #646cff
}

</style>
