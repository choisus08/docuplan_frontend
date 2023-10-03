import { createRouter, createWebHistory} from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'

// const Index = () => import('../views/Index.vue');
// const Login = () => import('../views/Login.vue')


// Routes 
const routes = [
    { path: '/', component: Index },
    { path: '/login', component: Login }
];

// Router
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;