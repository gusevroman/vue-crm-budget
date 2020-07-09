import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('@/views/Login'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('@/views/Register'),
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', requiresAuth: true },
    component: () => import('@/views/Home'),
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main', requiresAuth: true },
    component: () => import('@/views/Categories'),
  },
  {
    path: '/detail',
    name: 'detail',
    meta: { layout: 'main', requiresAuth: true },
    component: () => import('@/views/Detail'),
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main', requiresAuth: true },
    component: () => import('@/views/History'),
  },
  {
    path: '/expense',
    name: 'expense',
    meta: { layout: 'main', requiresAuth: true },
    component: () => import('@/views/Expense'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main', requiresAuth: true },
    component: () => import('@/views/Profile'),
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main', requiresAuth: true },
    component: () => import('@/views/Record'),
  },
  {
    path: '/settings',
    name: 'settings',
    meta: { layout: 'main', requiresAuth: true },
    component: () => import('@/views/Settings'),
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requireAuth && !currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
