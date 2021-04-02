import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index.js';
import store from '@/store/index';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import { reqPost } from '@/api/common/request';
import { userapi } from '@/api/common/api';
import { rescode } from '@/api/common/consts';

Vue.prototype.$axios = axios;
Vue.prototype.$reqPost = reqPost;
Vue.prototype.$userapi = userapi;
Vue.prototype.$rescode = rescode;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store,
}).$mount('#app');
