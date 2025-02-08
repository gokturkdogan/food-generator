import { createStore } from 'vuex';
import category from './modules/category';
import favorites from './modules/favorites';
import randomizer from './modules/randomizer';

export default createStore({
  modules: {
    category,
    favorites,
    randomizer
  },
});