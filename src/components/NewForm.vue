<template>
    <form class="form" @submit.prevent="handleSubmit">
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
            <!-- <input class="checkbox" type="checkbox" v-model="newApptHighPriority"/> 
            <label class="priority">High Priority</label> -->
        </div> 
               
            <button class="addBtn"></button>
    </form>
</template>

<script>
    // import {ref} from 'vue'
    import url from '../url'

    // const newApptHighPriority = ref(false)

    export default {
        name: "NewForm",
        data() {
            return {
            appointment_title: '',
            doctor_name: '',
            doctor_specialist: '',
            address: '',
            date: '',
            time: '',
            notes: '',
            // newApptHighPriority: false
        
            }
        },
        props: ['fetchAppts', 'appointments'],
        methods: {
            handleSubmit: async function(event) {
                // console.log(this)
                // console.log(event)
                let newAppt = {
                    appointment_title: this.appointment_title,
                    doctor_name: this.doctor_name,
                    doctor_specialist: this.doctor_specialist,
                    address: this.address,
                    date: this.date,
                    time: this.time,
                    notes: this.notes,
                }
                // console.log(newAppt)
                const apptUrl = `${url}`
                const response = await fetch(apptUrl, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newAppt)
                })

                if (response.ok) {
                     // refetch list in db
                    this.fetchAppts()
                    this.clearForm()
                }

                // vanilla js
                // window.location.href = 'http://localhost:5173/'

            },
            clearForm: function() {
                this.appointment_title = '';
                this.doctor_name = '';
                this.doctor_specialist = '';
                this.address = '';
                this.date = '';
                this.time = '';
                this.notes = '';
                this.newApptHighPriority = false;
            }

         }
    }
    
</script>

<style scoped>
form {
    width: 400px;
    margin: 2em auto;
    background-color: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    color: rgb(187, 185, 185);
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

.addBtn {
    display: block;
    margin: 2em auto 0;
    background-color:  white;
    background-image: url('../../public/file2.png');
    background-size: cover;
    background-repeat: none;
    background-position: center;
    width: 60px;
    height: 60px;
    border: none;
}

</style>
