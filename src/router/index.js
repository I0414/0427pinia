import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/Cart.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/aboutCom',
    name: 'AboutCom',
    component: () => import('../views/AboutCom.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
