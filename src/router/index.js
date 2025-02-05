import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Favorites from '../views/Favorites.vue';
import ProductList from '../views/ProductList.vue';

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
  },
  {
    path: '/food-generator/product-list',
    name: 'ProductList',
    component: ProductList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;