import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './store/store';
import './registerServiceWorker';

import axios from 'axios';

Vue.config.productionTip = false;

let token = window.localStorage.getItem('dvlmp-token');
if(token){
  axios.defaults.headers.common['Authorization'] = "Bearer "+token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
