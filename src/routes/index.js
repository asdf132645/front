import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultRoutes from './detachPage/default';
import aType from './detachPage/aType';
import bType from '@/routes/detachPage/bType';
import cType from '@/routes/detachPage/cType';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [...defaultRoutes],
});

router.afterEach(() => {
  if (sessionStorage.getItem('routes') === 'a') {
    router.addRoutes([...aType]);
  } else if (sessionStorage.getItem('routes') === 'b') {
    router.addRoutes([...bType]);
  } else if (sessionStorage.getItem('routes') === 'c') {
    router.addRoutes([...cType]);
  }
});

export default router;
