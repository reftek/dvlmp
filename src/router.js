import Vue from 'vue';
import Router from 'vue-router';

import MainSite from './views/MainSite.vue';
import mainRoutes from './routes/mainRoutes';

import MerchantSite from './views/MerchantSite.vue';
import merchantRoutes from './routes/merchantRoutes';

import CustomerSite from './views/CustomerSite.vue';
import customerRoutes from './routes/customerRoutes';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
		{
            path: '/',
			component: MainSite,
			children: mainRoutes,
        },
		{
            path: '/merchant',
			component: MerchantSite,
			children: merchantRoutes,
        },
		{
            path: '/customer',
			component: CustomerSite,
			children: customerRoutes,
        },
    ]
});