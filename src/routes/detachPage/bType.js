import routepath from '@/utils/routes';

export default [
  {
    path: '/',
    redirect: '/auth/login2',
  },
  {
    path: routepath.main2,
    component: () => import('@/views/default/MainPage2.vue'),
  },
  {
    path: '/auth/login2',
    component: () => import('@/views/auth/LoginPage2'),
  },
  {
    path: '/auth/test',
    component: () => import('@/views/auth/SignupPage'),
  },
];
