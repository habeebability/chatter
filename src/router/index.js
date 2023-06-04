import { createRouter, createWebHistory } from 'vue-router';
// import Home from "@/views/Home.vue";

// Lazy Loading components, only load when needed,
// const Home = () => import('@/views/Home.vue');

const Auth = () => import('../views/auth/Auth.vue');
const LandingPage = () => import('../views/LandingPage.vue');

const routes = [
  {
    name: 'auth',
    path: '/auth',
    component: Auth
  },
  {
    name: 'home',
    path: '/',
    component: LandingPage
  },

  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
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
