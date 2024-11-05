import Services from '../../config/_axios';
import API from '../../api';

const category = {
  state: () => ({
    categories: []
  }),
  mutations: {
    SET_CATEGORIES(state, payload) {
      state.categories = payload;
    }
  },
  actions: {
    async getCategories({ commit }) {
      try {
        const response = await Services.get(API.Categories);
        commit('SET_CATEGORIES', response.data);
      } catch (error) {
        console.error('Kategori verisi alınırken bir hata oluştu:', error);
      }
    }
  },
  getters: {
    getCategories: (state) => state.categories
  },
  namespaced: true
};

export default category;