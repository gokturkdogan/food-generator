import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Favorites from '../views/Favorites.vue';

const routes = [
  {
    path: '/food-generator/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/food-generator/favorites',
    name: 'Favorites',
    component: Favorites,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;