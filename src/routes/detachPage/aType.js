import routepath from '@/utils/routes';

export default [
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: routepath.main,
    component: () => import('@/views/type1/default/MainPage.vue'),
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
    component: () => import('@/views/type1/auth/FindIdPswPage.vue'),
  },
  //로그인,회원가입,마이페이지
  {
    path: routepath.login,
    component: () => import('@/views/type1/auth'),
    redirect: '/auth/login',
    children: [
      {
        path: routepath.login,
        component: () => import('@/views/type1/auth/LoginPage'),
        meta: {
          auth: false,
        },
      },
      {
        path: routepath.signup,
        component: () => import('@/views/type1/auth/SignupPage'),
        meta: {
          auth: false,
        },
      },
      {
        path: routepath.mypage,
        component: () => import('@/views/type1/auth/MyInfoPage'),
        meta: {
          auth: true,
        },
      },
    ],
  },
  //게시판
  {
    path: routepath.border,
    component: () => import('@/views/type1/border'),
    redirect: '/border/borderList',
    children: [
      {
        path: 'borderList',
        component: () => import('@/views/type1/border/BorderPage'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/post/:id',
        component: () => import('@/views/type1/border/BorderEditPage'),
        meta: {
          auth: true,
        },
      },
      {
        path: routepath.borderAdd,
        component: () => import('@/views/type1/border/BorderAddPage'),
        meta: {
          auth: true,
        },
      },
    ],
  },
];
