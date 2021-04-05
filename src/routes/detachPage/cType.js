export default [
  {
    path: '/',
    redirect: '/auth/login3',
  },
  {
    path: '/auth/login3',
    component: () => import('@/views/auth/LoginPage3'),
  },
];
