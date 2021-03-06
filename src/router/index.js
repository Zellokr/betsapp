import { createRouter, createWebHashHistory } from 'vue-router';
import CalculatorView from '../views/CalculatorView.vue';
import MarathonView from '../views/MarathonView.vue';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: CalculatorView
    },
    {
        path: '/marathonbet',
        name: 'Marathonbet',
        component: MarathonView
    }
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
