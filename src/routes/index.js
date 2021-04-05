import Vue from 'vue';
import VueRouter from 'vue-router';
import borderRoutes from './detachPage/border';
import defaultRoutes from './detachPage/default';
import loginRoutes from './detachPage/login';
// import routepath from '@/utils/routes';
import loginRoutes2 from '@/routes/detachPage/login2';

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
    ...loginRoutes,
  ],
});

router.afterEach((to, from, next) => {
  if (sessionStorage.getItem('routes') === 'a') {
    router.addRoutes([...loginRoutes2]);
    return to.fullPath;
  } else if (sessionStorage.getItem('routes') === 'b') {
    router.addRoutes([...defaultRoutes]);
  }
  console.log(to);
  next();
});

export default router;
