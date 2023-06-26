import { createRouter, createWebHistory } from 'vue-router';
// import Home from "@/views/Home.vue";

// Lazy Loading components, only load when needed,
// const Home = () => import('@/views/Home.vue');

const Auth = () => import('../views/auth/Auth.vue');
const LandingPage = () => import('../views/LandingPage.vue');
// const MainLayout = () => import('../views/MainLayout.vue');
import Dashboard from '../views/Dashboard.vue';
import MainLayout from '../views/MainLayout.vue';
import CreatePost from '../views/CreatePost.vue';
import RenderChildren from '../views/RenderChildren.vue';
const routes = [
  {
    name: 'auth',
    path: '/auth/:authType',
    component: Auth
  },
  {
    name: 'home',
    path: '/',
    component: LandingPage
  },
  {
    name: 'dashboard',
    path: '/dashboard',

    component: MainLayout,
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        redirect: { name: 'dashboard' },
        component: RenderChildren,
        children: [
          {
            name: 'dashboard',
            path: '/dashboard',
            component: Dashboard
          },
          {
            name: 'create-post',
            path: '/create-post',
            component: CreatePost
          }
        ]
        // component: () => import('../views/Dashboard.vue')
        // component: () => import('../views/dashboard/Dashboard.vue')
      },
      {
        name: 'bookmarks',
        path: '/bookmarks',
        component: () => import('../views/Dashboard.vue')
        // component: () => import('../views/dashboard/Dashboard.vue')
      },
      {
        name: 'blogs',
        path: '/blogs',
        component: () => import('../views/Dashboard.vue')
        // component: () => import('../views/dashboard/Dashboard.vue')
      },
      {
        name: 'drafts',
        path: '/drafts',
        component: () => import('../views/Dashboard.vue')
        // component: () => import('../views/dashboard/Dashboard.vue')
      },
      {
        name: 'analytics',
        path: '/analytics',
        component: () => import('../views/Dashboard.vue')
        // component: () => import('../views/dashboard/Dashboard.vue')
      }
    ]
  },
  {
    name: 'bookmarks',
    path: '/bookmarks',
    component: MainLayout
  },
  {
    name: 'blank',
    path: '/blank',
    component: () => import('../views/Blank.vue')
  },

  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-blue-500'
});

// Global Navigation Guard
// router.beforeEach((to, from, next) => {
//   console.log("Global Navigation Guard", to.meta);
//   if (!to.meta.requiresAuth) {
//     next();
//     return;
//   }

//   const store = useUserStore();

//   console.log(store.userLoggedIn);
//   if (store.userLoggedIn) {
//     next();
//   } else {
//     next({ name: "home" });
//   }
// });

export default router;
