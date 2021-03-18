import routepath from '@/utils/routes';

export default [
  {
    path: routepath.login,
    component: () => import('@/views/default/LoginPage.vue'),
  },
];
