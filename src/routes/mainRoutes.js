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
    },
    {
        path: 'how-it-works',
        name: 'main.how-it-works',
        component: () => import( /* webpackChunkName: "how-it-works" */ './../views/main/HowItWorks.vue')
    },
    {
        path: 'merchants',
        name: 'main.merchants',
        component: () => import( /* webpackChunkName: "merchants" */ './../views/main/Merchants.vue')
    },
    {
        path: 'faq',
        name: 'main.faq',
        component: () => import( /* webpackChunkName: "faq" */ './../views/main/FAQ.vue')
    },
    {
        path: 'signup',
        name: 'main.signup',
        component: () => import( /* webpackChunkName: "signup" */ './../views/main/SignUp.vue')
    },
    {
        path: 'login',
        name: 'main.login',
        component: () => import( /* webpackChunkName: "login" */ './../views/main/Login.vue')
    }
];