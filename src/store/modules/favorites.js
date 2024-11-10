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
    async updateFavorites({ commit, state, dispatch }, { productId, isFavorite }) {
      try {
          const product = state.favorites.find(product => product.id === productId);
          if (product) {
              const updatedProduct = {
                  ...product,
                  isFavorite: !isFavorite
              };
              const url = API.productdetail.replace("{id}", productId);
              await Services.put(url, updatedProduct);
              const favoriteData = {
                  ...updatedProduct,
                  productId: updatedProduct.id
              };
              if (isFavorite) {
                  const favorites = await Services.get(API.favorites);
                  const favoriteItem = favorites.data.find(fav => fav.productId === productId);
  
                  if (favoriteItem && favoriteItem.id) {
                      await Services.delete(`${API.favorites}/${favoriteItem.id}`);
                  } else {
                      console.warn("Favorilerde belirtilen productId ile eşleşen bir objectId bulunamadı.");
                  }
              } else {
                  await Services.post(API.favorites, favoriteData);
              }
              await dispatch('getFavorites');
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