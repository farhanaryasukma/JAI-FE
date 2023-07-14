import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Login from '../views/Login.vue'
import Checkout from '../views/Checkout.vue'
import OrderSummary from '../views/OrderSummary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/ordersummary',
      name: 'ordersummary',
      component: OrderSummary,
    },
  ]
})

// Check if the user is authenticated before each route navigation
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // Get the token from local storage or Vuex store

  if (to.meta.requiresAuth && !isAuthenticated) {
    // If the route requires authentication and the user is not authenticated, redirect to the login page
    next({ name: 'Login' });
  } else {
    // Continue to the requested route
    next();
  }
});

export default router
