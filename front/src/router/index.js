import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '../components/views/Homepage.vue';
import About from '../components/views/About.vue';
import Event from '../components/views/Event.vue';
import Contact from '../components/views/Contact.vue';
import NotAuthorized from '../components/nav/NotAuthorized.vue';

Vue.use(VueRouter)

const routes = [
     
    { 
        path: '/',
        component: Homepage,

    },
    { 
        path: '/home',
        component: Homepage,

    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/event',
        component: Event,
    },
    {
        path: '/contact',
        component: Contact,
    },

    {
        path: "/:pathMatch(.*)*",
        component: NotAuthorized,
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router