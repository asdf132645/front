import routepath from '@/utils/routes';

export default [
  {
    path: routepath.login,
    component: () => import('@/views/auth'),
    redirect: '/auth/login',
    children: [
      {
        path: '/auth/login',
        component: () => import('@/views/auth/LoginPage'),
        meta: {
          auth: false,
          type: '1',
        },
      },
      {
        path: '/auth/signup',
        component: () => import('@/views/auth/SignupPage'),
        meta: {
          auth: false,
          type: '2',
        },
      },
    ],
  },
];
