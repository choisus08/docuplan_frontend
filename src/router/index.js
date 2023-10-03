import { createRouter, createWebHistory} from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Show from '../views/Show.vue'


// Routes 
const routes = [
    { path: '/', name: 'Index', component: Index },
    { path: '/login', name: 'Login', component: Login }
];

// Router
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

// Create & mount the root instance
// const app = Vue.createApp({})
// // make sure to _use_ the router instance to make the whole app router-aware
// app.us(router)
// app.mount('#app')

export default router;