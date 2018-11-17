import Home from './../views/main/Home.vue';

export default [
    {
        path: '/',
        name: 'main.home',
        component: Home,
    },
    {
        path: 'about',
        name: 'main.about',
        component: () => import( /* webpackChunkName: "about" */ './../views/main/About.vue')
    }
];