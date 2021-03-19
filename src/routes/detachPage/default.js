import routepath from '@/utils/routes';

export default [
  {
    path: routepath.main,
    component: () => import('@/views/default/MainPage.vue'),
  },
  {
    path: '*',
    component: () => import('@/views/default/NotFoundPage.vue'),
  },
];
