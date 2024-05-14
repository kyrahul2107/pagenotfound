import { createWebHistory, createRouter } from 'vue-router'; 

import HomeComponent from './components/HomeComponent.vue';
import LoginPage from './components/LoginPage.vue';
import AboutComponent from './components/AboutComponent.vue';
import ProfileComponent from './components/ProfileComponent';
import PageNotFound from './components/PageNotFound';

const routes = [
    {
        name: 'HomeComponent',
        path: '/',
        component: HomeComponent,
    },
    {
        name:'LoginPage',
        path:'/LoginPage',
        component:LoginPage,
    },
    {
        name:'AboutComponent',
        path:'/AboutComponent',
        component:AboutComponent


    },
    {
        name:'ProfileComponent',
        path:'/ProfileComponent/:name',
        component:ProfileComponent
    },
    {
        name:'NotFound',
        // for page not found by adding wrong route
        path:'/:pathMatch(.*)*',
        component:PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 
