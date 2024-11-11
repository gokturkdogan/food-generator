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
        async deleteFavorites({ state, dispatch, commit }, { productId }) {
            await dispatch('getFavorites');
            try {
                await commit('category/SET_SELECTED_PRODUCT', { isFavorite: false }, { root: true });
                const product = state.favorites.find(product => product.productId === productId);
                if (product) {
                    await Services.delete(`${API.favorites}/${product.id}`);
                    await dispatch('getFavorites');
                    const { id, ...updatedProduct } = product;
                    updatedProduct.isFavorite = false;
                    const url = API.productdetail.replace("{id}", product.productId);
                    await Services.put(url, updatedProduct);
                } else {
                    console.warn("Belirtilen productId ile eşleşen ürün bulunamadı.");
                }
            } catch (error) {
                console.error("Favoriler güncellenirken bir hata oluştu:", error);
            }
        },
        async addFavorites({ rootState, commit, dispatch }) {
            await dispatch('getFavorites');
            try {
                await commit('category/SET_SELECTED_PRODUCT', { isFavorite: true }, { root: true });
                const product = rootState.category.selectedProduct;
                if (product) {
                    await Services.post(API.favorites, product);
                    const updatedProduct = {
                        ...product,
                        isFavorite: true
                    }
                    const url = API.productdetail.replace("{id}", product.productId);
                    await Services.put(url, updatedProduct);
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