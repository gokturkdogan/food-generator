import { createStore } from 'vuex';
import category from './modules/category';
import favorites from './modules/favorites';

export default createStore({
  modules: {
    category,
    favorites
  },
});