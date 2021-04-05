import routepath from '@/utils/routes';

export default [
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: routepath.main,
    component: () => import('@/views/type2/default/MainPage.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '*',
    component: () => import('@/views/default/NotFoundPage.vue'),
  },
  {
    path: routepath.findidpws,
    component: () => import('@/views/type2/auth/FindIdPswPage.vue'),
  },
  //로그인,회원가입,마이페이지
  {
    path: routepath.login,
    component: () => import('@/views/type2/auth'),
    redirect: '/auth/login',
    children: [
      {
        path: routepath.login,
        component: () => import('@/views/type2/auth/LoginPage'),
        meta: {
          auth: false,
        },
      },
      {
        path: routepath.signup,
        component: () => import('@/views/type2/auth/SignupPage'),
        meta: {
          auth: false,
        },
      },
      {
        path: routepath.mypage,
        component: () => import('@/views/type2/auth/MyInfoPage'),
        meta: {
          auth: true,
        },
      },
    ],
  },
];
