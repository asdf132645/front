import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import aType from '@/routes/detachPage/aType';
import bType from '@/routes/detachPage/bType';
import cType from '@/routes/detachPage/cType';
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/auth/login',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    alert('로그인을 해주세요.');
    next('/auth/login');
    return;
  }
  console.log(to);
  next();
});

router.afterEach(() => {
  axios
    .get('/layout.json')
    .then(res => {
      let layouts = res.data.layouts;
      if (layouts == 'a') {
        router.addRoutes([...aType]);
      } else if (layouts === 'b') {
        router.addRoutes([...bType]);
      } else if (layouts === 'c') {
        router.addRoutes([...cType]);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
});

export default router;
