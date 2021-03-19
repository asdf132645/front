import routepath from '@/utils/routes';

export default [
  {
    path: routepath.login,
    component: () => import('@/views/login'),
    redirect: '/login/login',
    children: [
      {
        path: 'login',
        component: () => import('@/views/login/LoginPage'),
        meta: {
          auth: false,
        },
      },
    ],
  },
];
