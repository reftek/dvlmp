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
        component: () => import( /* webpackChunkName: "merchant-requests" */ './../views/merchant/MerchantRequests.vue')
    },
    {
        path: 'orders',
        name: 'merchants.orders',
        component: () => import( /* webpackChunkName: "merchant-orders" */ './../views/merchant/MerchantOrders.vue')
    },
    {
        path: 'payments',
        name: 'merchants.payments',
        component: () => import( /* webpackChunkName: "merchant-payments" */ './../views/merchant/MerchantPayments.vue')
    },
    {
        path: 'stats',
        name: 'merchants.stats',
        component: () => import( /* webpackChunkName: "merchant-stats" */ './../views/merchant/MerchantStats.vue')
    },
    {
        path: 'zones',
        name: 'merchants.zones',
        component: () => import( /* webpackChunkName: "merchant-zones" */ './../views/merchant/MerchantZones.vue')
    },
    {
        path: 'settings',
        name: 'merchants.settings',
        component: () => import( /* webpackChunkName: "merchant-settings" */ './../views/merchant/MerchantSettings.vue')
    },
];