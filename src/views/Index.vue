<template>
    <h1>Appointments</h1>
    <form class="add-appt-form">
        <div class="input" >
            <input v-model="newAppt" type="text" placeholder="Appointment Title" />
            <input v-model="newAppt" type="text" placeholder="Doctor Name" />
            <input v-model="newAppt" type="text" placeholder="Specialist" />
            <input v-model="newAppt" type="text" placeholder="Address" />
            <input v-model="newAppt" type="date" placeholder="Date" />
            <input v-model="newAppt" type="time" placeholder="Time" />
            <input v-model="newAppt" type="text" placeholder="Notes" /> 
        </div> 
        <label>
            <input type="checkbox" v-model="newApptHighPriority"/>
            High Priority
        </label>
        <button v-on:click="addAppt" class="addBtn">+</button>
    </form>
    <div>
        <Post />
    </div>
</template>

<script>

    import {ref} from 'vue'
    import Post from '../components/Post.vue'

    const newAppt = ref("")
    const newApptHighPriority = ref(false)

    export default {

        name: "Index",
        components: {
            Post
        },
        data() {
            return {
                appointments: [],
                newAppointment: '',
                newAppt,
                newApptHighPriority
                
            }
        },
        methods: {
            addAppt: function() {
                this.appointments.push(this.newAppointment)
                this.newAppointment = ''
                console.log(addAppt())
            }
            
        }

    }

</script>

