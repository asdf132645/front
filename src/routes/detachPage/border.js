import routepath from '@/utils/routes';

export default [
  {
    path: routepath.border,
    component: () => import('@/views/border/Border.vue'),
  },
];
