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
          type: '1',
        },
      },
      {
        path: 'login2',
        component: () => import('@/views/login/LoginPage2'),
        meta: {
          auth: false,
          type: '2',
        },
      },
    ],
  },
];
