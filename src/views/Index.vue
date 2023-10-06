<template>
    <h1>Appointments</h1>
    <NewForm />
    <div>
        <Post />
    </div>
</template>

<script>

    import {ref} from 'vue'
    import Post from '../components/Post.vue'
    import NewForm from '../components/NewForm.vue'

    export default {

        name: "Index",
        components: {
            Post,
            NewForm
        },
        data() {
            return {
                appointments: ref([]),
                newAppointment: '',

            }
        }
    }

</script>

<style>

</style>
