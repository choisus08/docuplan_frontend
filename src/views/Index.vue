<template>
    <h1>Appointments</h1>
    <NewForm :fetchAppts="fetchAppts" />
    <div>
      <Post :fetchAppts="fetchAppts" :appointments="appointments"/>
    </div>
</template>

<script>

    import {ref} from 'vue'
    import Post from '../components/Post.vue'
    import NewForm from '../components/NewForm.vue'
    import url from '../url'

    export default {

        name: "Index",
        components: {
            Post,
            NewForm
        },
        data() {
            return {
                appointments: [],
            }
        },
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
        }}
        }

</script>

<style>

</style>
