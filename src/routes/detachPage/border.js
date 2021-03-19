import routepath from '@/utils/routes';

export default [
  {
    path: routepath.border,
    component: () => import('@/views/border'),
    redirect: '/border/borderList',
    children: [
      {
        path: 'borderList',
        component: () => import('@/views/border/BorderPage'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/post/:id',
        component: () => import('@/views/border/BorderEditPage'),
        meta: {
          auth: false,
        },
      },
      {
        path: routepath.borderAdd,
        component: () => import('@/views/border/BorderAddPage'),
        meta: {
          auth: false,
        },
      },
    ],
  },
];
