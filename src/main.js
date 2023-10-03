import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Index from './views/Index.vue'
import Login from './views/Login.vue'

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

createApp(App).use(router).mount('#app')
