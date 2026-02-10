import Services from '../../config/_axios';
import API from '../../api';
import i18n from '../../i18n';

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
        async getFavorites({ commit, dispatch }) {
            try {
                const response = await Services.get(API.favorites);
                const favoriteItems = response.data.filter(item => item.isFavorite);
                commit('SET_FAVORITES', favoriteItems);
            } catch (error) {
                dispatch('notify/openNotify', { type: 'error', message: i18n.global.t('notify.favorites.warning') }, { root: true });
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
                    await dispatch('category/getProductList', null, { root: true });
                    dispatch('notify/openNotify', { type: 'success', message: i18n.global.t('notify.favorites.remove') }, { root: true });
                } else {
                    dispatch('notify/openNotify', { type: 'warning', message: i18n.global.t('notify.product.error') }, { root: true });
                }
            } catch (error) {
                dispatch('notify/openNotify', { type: 'error', message: i18n.global.t('notify.favorites.error') }, { root: true });
            }
        },
        async addFavorites({ rootState, commit, dispatch }) {
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
                    dispatch('notify/openNotify', { type: 'success', message: i18n.global.t('notify.favorites.add') }, { root: true });
                } else {
                    dispatch('notify/openNotify', { type: 'warning', message: i18n.global.t('notify.product.error') }, { root: true });
                }
            } catch (error) {
                dispatch('notify/openNotify', { type: 'error', message: i18n.global.t('notify.favorites.error') }, { root: true });
            }
        },
        async addFavoritesFromProductList({ rootState, dispatch }, { productId }) {
            try {
                const products = rootState.category.products;
                if (products) {
                    const product = rootState.category.products.find(product => product.productId === productId);
                    const updatedProduct = {
                        ...product,
                        isFavorite: true
                    }
                    const url = API.productdetail.replace("{id}", product.productId);
                    await Services.put(url, updatedProduct);
                    await dispatch('category/getProductList', null, { root: true });
                    dispatch('notify/openNotify', { type: 'success', message: i18n.global.t('notify.favorites.add') }, { root: true });
                } else {
                    dispatch('notify/openNotify', { type: 'warning', message: i18n.global.t('notify.product.error') }, { root: true });
                }
            } catch (error) {
                dispatch('notify/openNotify', { type: 'error', message: i18n.global.t('notify.favorites.error') }, { root: true });
            }
        }
    },
    getters: {
        getFavorites: (state) => state.favorites,
    },
    namespaced: true
};

export default favorites;