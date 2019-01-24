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
        component: () => import( /* webpackChunkName: "customer-orders" */ './../views/customer/orders/CustomerOrders.vue')
    },
    {
        path: 'orders/new',
        name: 'customers.orders.new',
        component: () => import( /* webpackChunkName: "customer-orders-new" */ './../views/customer/orders/CustomerOrdersNew.vue')
    },
    {
        path: 'orders/:id',
        name: 'customers.orders.details',
        component: () => import( /* webpackChunkName: "customer-orders-details" */ './../views/customer/orders/CustomerOrdersDetails.vue'),
    },
    {
        path: 'merchant/:id',
        name: 'merchant.details',
        component: () => import( /* webpackChunkName: "customer-orders-details" */ './../views/customer/MerchantPage.vue'),
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