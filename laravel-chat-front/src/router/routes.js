const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/chat',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Chat.vue'), meta:{ hideDrawer:true } },
    ],
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
