import MerchantDashboard from './../views/merchant/MerchantDashboard.vue';

export default [
    {
        path: '/',
        name: 'merchant.home',
        component: MerchantDashboard,
    },
    // {
    //     path: 'about',
    //     name: 'main.about',
    //     component: () => import( /* webpackChunkName: "about" */ './../views/main/About.vue')
    // },
];