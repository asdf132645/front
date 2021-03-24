import Vue from 'vue';
import VueRouter from 'vue-router';
import borderRoutes from './detachPage/border';
// import defaultRoutes from './detachPage/default';
import loginRoutes from './detachPage/login';
import routepath from '@/utils/routes';
// import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    ...borderRoutes,
    // ...defaultRoutes,
    ...loginRoutes,
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('인증이 필요합니다.');
    next({
      path: routepath.login,
      query: { redirect: to.fullPath },
    });
    return;
  }
  console.log(to);
  next();
});

export default router;
