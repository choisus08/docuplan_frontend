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
    margin: 4em 4em
}

</style>
