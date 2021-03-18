import Vue from 'vue';
import VueRouter from 'vue-router';
import borderRoutes from './detachPage/border';
import defaultRoutes from './detachPage/default';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    ...borderRoutes,
    ...defaultRoutes,
  ],
});

export default router;
