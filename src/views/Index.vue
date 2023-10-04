<template>
    <div>
        <h1>Index Page</h1>
        <Post v-for="appt in apptList" :appt="appt" />
        <!-- <li  v-for="appt in apptList">
            test
          </li> -->
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue'
    import url from '../url'
    import Post from '../components/Post.vue'

    export default {

        name: "Index",

        setup() {

            const apptList = ref([]);

            onMounted(() => { 
                console.log('test onMounted')
                fetch(url)
                .then((response) => response.json())
                .then(apiAppts => {
                    console.log(apiAppts)
                    apptList.value = apiAppts
                    console.log(apptList.value)
                })
            })
            // console.log(apptList)

            return { 
                apptList

            }

    }}

</script>

