import Services from '../../config/_axios';
import API from '../../api';

const category = {
  state: () => ({
    subCategories: [],
    activeCategory: 'foods'
  }),
  mutations: {
    SET_SUB_CATEGORIES(state, payload) {
      state.subCategories = payload;
    },
    SET_ACTIVE_CATEGORY(state, payload) {
      state.activeCategory = payload;
    }
  },
  actions: {
    async getSubCategories({ commit, state }) {
      try {
        const response = await Services.get(API[state.activeCategory]);
        commit('SET_SUB_CATEGORIES', response.data);
      } catch (error) {
        console.error('Kategori verisi alınırken bir hata oluştu:', error);
      }
    },
    async changeCategory({ commit, dispatch }, category) {
      await commit('SET_ACTIVE_CATEGORY', category);
      dispatch('getSubCategories');
    }
  },
  getters: {
    getSubCategories: (state) => state.subCategories,
    getActiveCategory: (state) => state.activeCategory
  },
  namespaced: true
};

export default category;