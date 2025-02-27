import { createStore } from 'vuex';
import category from './modules/category';
import favorites from './modules/favorites';
import randomizer from './modules/randomizer';
import notify from './modules/notify';
import productDetail from './modules/product-detail';

export default createStore({
  modules: {
    category,
    favorites,
    randomizer,
    notify,
    productDetail
  },
});