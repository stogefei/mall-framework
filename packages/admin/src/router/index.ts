import {
  createRouter,
  // createWebHashHistory,
  RouteRecordRaw,
  Router,
  createWebHistory,
} from 'vue-router';
import HomeView from '../views/index';
const titlePrefix = '生鲜';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: `登录-${titlePrefix}`,
      unauthorized: true,
    },
    components: {
      default: () => import('../views/login/index'),
    },
  },
];

// export default {
//   mode: process.env.NODE_ENV === 'development' ? 'history' : 'hash',
//   base: process.env.BASE_URL,
//   routes,
// };

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
