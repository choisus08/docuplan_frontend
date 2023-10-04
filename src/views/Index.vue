<template>
    <div>
        <Post />
    </div>
</template>

<script>

    import Post from '../components/Post.vue'

    export default {

        name: "Index",
        components: {
            Post
        },
        data() {
            return {
                appointments: [],
                newAppointment: '',
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

