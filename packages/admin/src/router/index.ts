import {
  createRouter,
  // createWebHashHistory,
  RouteRecordRaw,
  Router,
  createWebHistory,
} from 'vue-router';
import HomeView from '../views/index';
import List from '../views/product-list';
import Detail from '../views/product-detail';
const titlePrefix = '生鲜';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
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
