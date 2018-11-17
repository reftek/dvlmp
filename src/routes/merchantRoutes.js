import MerchantDashboard from './../views/merchant/MerchantDashboard.vue';

export default [
    {
        path: '/',
        name: 'merchants.dashboard',
        component: MerchantDashboard,
    },
    {
        path: 'requests',
        name: 'merchants.requests',
        component: () => import( /* webpackChunkName: "about" */ './../views/merchant/MerchantRequests.vue')
    },
    {
        path: 'orders',
        name: 'merchants.orders',
        component: () => import( /* webpackChunkName: "about" */ './../views/merchant/MerchantOrders.vue')
    },
    {
        path: 'payments',
        name: 'merchants.payments',
        component: () => import( /* webpackChunkName: "about" */ './../views/merchant/MerchantPayments.vue')
    },
    {
        path: 'stats',
        name: 'merchants.stats',
        component: () => import( /* webpackChunkName: "about" */ './../views/merchant/MerchantStats.vue')
    },
    {
        path: 'zones',
        name: 'merchants.zones',
        component: () => import( /* webpackChunkName: "about" */ './../views/merchant/MerchantZones.vue')
    },
    {
        path: 'settings',
        name: 'merchants.settings',
        component: () => import( /* webpackChunkName: "about" */ './../views/merchant/MerchantSettings.vue')
    },
];