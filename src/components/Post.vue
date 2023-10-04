<template>
    <div v-for="appt in appts" class="post">
        <h2>{{appt.appointment_title}}</h2>
        <h3>{{appt.date}}</h3>
        <h3>{{appt.time}}</h3>
        <h3>{{appt.doctor_name}}</h3>
        
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue'
    import url from '../url'


    export default {
        name: "Post",
        props: ['post'],

        setup() {

            const appts = ref([]);

            onMounted(() => { 
                // console.log('test onMounted')
                fetch(url)
                .then((response) => response.json())
                .then(data => {
                    console.log(data)
                    appts.value = data
                    console.log(appts.value)
                })
            })

            return { 
                appts
            }
    

    }}
</script>

<style scoped>

</style>