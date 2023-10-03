<template>
    <div>
        <h1>Index Page</h1>
        <Post v-for="appt in apptList" :appt="appt" />
    </div>
</template>

<script>
    
    import { ref, onMounted } from 'vue'
    import url from '../url'
    import Post from '../components/Post.vue'

    const apptList = ref([])

    onMounted(() => {
        fetch(url)
        .then((response) => response.json())
        .then(apiAppts => {
            apptList.value = apiAppts
        })
    })

    export default {
        
    }
</script>

<style scoped>

</style>