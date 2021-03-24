import routepath from '@/utils/routes';

export default [
  {
    path: routepath.main,
    component: () => import('@/views/default/MainPage.vue'),
  },
];
