<template>
    <h1>Appointments</h1>
    <NewForm />
    <div>
        <Post />
    </div>
</template>

<script>

    import {VueElement, ref} from 'vue'
    import Post from '../components/Post.vue'
    import NewForm from '../components/NewForm.vue'

    const newAppt = ref("")
    const newApptHighPriority = ref(false)

    export default {

        name: "Index",
        components: {
            Post,
            NewForm
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
            // Add new appt
            addAppt: function() {
                this.appointments.push(this.newAppointment)
                this.newAppointment = ''
                console.log(addAppt())
            }
        }         
    }

</script>
