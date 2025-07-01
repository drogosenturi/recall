import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Music from "@/views/Music.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/music',
        name: 'Music',
        component: Music
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;