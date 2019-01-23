import CustomerDashboard from './../views/customer/CustomerDashboard.vue';

export default [
    {
        path: '/',
        name: 'customers.dashboard',
        component: CustomerDashboard,
    },
    {
        path: 'contacts',
        name: 'customers.contacts',
        component: () => import( /* webpackChunkName: "customer-contacts" */ './../views/customer/CustomerContacts.vue')
    },
    {
        path: 'orders',
        name: 'customers.orders',
        component: () => import( /* webpackChunkName: "customer-orders" */ './../views/customer/CustomerOrders.vue')
    },
    {
        path: 'orders/:id',
        name: 'customers.orders.details',
        component: () => import( /* webpackChunkName: "customer-orders" */ './../views/customer/CustomerOrdersDetails.vue'),
        props: {orders: true}
    },
    {
        path: 'wallet',
        name: 'customers.wallet',
        component: () => import( /* webpackChunkName: "customer-wallet" */ './../views/customer/CustomerWallet.vue')
    },
    {
        path: 'stats',
        name: 'customers.stats',
        component: () => import( /* webpackChunkName: "customer-stats" */ './../views/customer/CustomerStats.vue')
    },
    {
        path: 'settings',
        name: 'customers.settings',
        component: () => import( /* webpackChunkName: "customer-settings" */ './../views/customer/CustomerSettings.vue')
    },
];