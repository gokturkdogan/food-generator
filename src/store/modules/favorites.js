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
                const favoriteItems = response.data.filter(item => item.isFavorite);
                commit('SET_FAVORITES', favoriteItems);
            } catch (error) {
                console.error('Favori verisi alınırken bir hata oluştu:', error);
            }
        },
        async deleteFavorites({ state, dispatch, commit }, { productId }) {
            await dispatch('getFavorites');
            try {
                await commit('category/SET_SELECTED_PRODUCT', { isFavorite: false }, { root: true });
                const product = state.favorites.find(product => product.productId === productId);
                if (product) {
                    const { id, ...updatedProduct } = product;
                    updatedProduct.isFavorite = false;
                    const url = API.productdetail.replace("{id}", product.productId);
                    await Services.put(url, updatedProduct);
                    await dispatch('getFavorites');
                } else {
                    console.warn("Belirtilen productId ile eşleşen ürün bulunamadı.");
                }
            } catch (error) {
                console.error("Favoriler güncellenirken bir hata oluştu:", error);
            }
        },
        async addFavorites({ rootState, commit }) {
            try {
                await commit('category/SET_SELECTED_PRODUCT', { isFavorite: true }, { root: true });
                const product = rootState.category.selectedProduct;
                if (product) {
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