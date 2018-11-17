import Vue from 'vue';
import Router from 'vue-router';

import MainSite from './views/MainSite.vue';
import mainRoutes from './routes/mainRoutes';

import MerchantSite from './views/MerchantSite.vue';
import merchantRoutes from './routes/merchantRoutes';

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
    ]
});