import Vue from 'vue';
import Router from 'vue-router';

import MainSite from './views/MainSite.vue';
import mainRoutes from './routes/mainRoutes';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
		{
            path: '/',
            // name: 'home',
			component: MainSite,
			children: mainRoutes,
        },
    ]
});