import Services from '../../config/_axios';
import API from '../../api';

const favorites = {
  state: () => ({
    favorites: []
  }),
  mutations: {
    SET_FAVORITES(state, payload) {
        state.favorites = payload;
    },
  },
  actions: {
    async getFavorites({ commit }) {
        try {
            const response = await Services.get(API.favorites);
            commit('SET_FAVORITES', response.data);
        } catch (error) {
            console.error('Kategori verisi alınırken bir hata oluştu:', error);
        }
    },
    async updateFavorites({ commit, rootState }, { productId, isFavorite }) {
        try {
          const product = rootState.category.products.find(product => product.id === productId);
          if (product) {
            const updatedProduct = {
              ...product,
              isFavorite: !isFavorite
            };
            const url = API.productdetail.replace("{id}", productId);
            await Services.put(url, updatedProduct);
            const selectedProduct = await Services.get(API.productdetail.replace("{id}", productId));
            commit('category/SET_SELECTED_PRODUCT', selectedProduct.data, { root: true });
          } else {
            console.warn("Belirtilen productId ile eşleşen ürün bulunamadı.");
          }
        } catch (error) {
          console.error("Favoriler güncellenirken bir hata oluştu:", error);
        }
      }
  },
  getters: {
    getFavorites: (state) => state.favorites,
  },
  namespaced: true
};

export default favorites;