<template>
    <div>
        <h1>Login Page</h1>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import {useRouter, useRoute} from 'vue-router'

    export default {
        setup(){
            const username = ref('')
            const password = ref('')
            const router = useRouter()
            const route = useRoute()
            const login = () => {
                window.user = username.value
                const redirectPath = route.query.redirect || '/protected'
                router.push(redirectPath)
            }
            return {username, password, login}
        }
    }
</script>

<style scoped>

</style>