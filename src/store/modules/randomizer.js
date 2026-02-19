import Services from '../../config/_axios';
import API from '../../api';
import i18n from '../../i18n';

const randomizer = {
    state: () => ({}),
    mutations: {},
    actions: {
        async randomizeWithCategory({ rootState, commit }) {
            try {
                const url = API.categoryproducts.replace("{id}", rootState.category.activeCategoryId);
                const response = await Services.get(url);
                let randomIndex;
                randomIndex = Math.floor(Math.random() * response.data.length);
                const randomProduct = response.data[randomIndex];
                await commit('category/SET_SELECTED_PRODUCT', randomProduct, { root: true });
                await commit('category/SET_MODAL', { isShow: true }, { root: true });
                setTimeout(() => {
                    commit('category/SET_MODAL', { loader: false }, { root: true });
                }, 2000);
            } catch (error) {
                console.error(i18n.global.t('notify.category.error'), error);
            }
        }
    },
    getters: {},
    namespaced: true
};

export default randomizer;