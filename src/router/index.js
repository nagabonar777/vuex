import {
    createWebHistory, createRouter } from "vue-router";
import home from "../views/Home.vue";


const routes = [
    {
        path: "/",
        home: "Home",
        component: home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;