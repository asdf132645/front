import routepath from '@/utils/routes';

export default [
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: routepath.main,
    component: () => import('@/views/default/MainPage.vue'),
  },
  //로그인
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
  //게시판
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
