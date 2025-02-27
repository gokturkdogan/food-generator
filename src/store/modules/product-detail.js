import Services from '../../config/_axios';
import API from '../../api';
import router from '../../router';

const productDetail = {
    state: () => ({
        product: {}
    }),
    mutations: {
        SET_PRODUCT_DETAIL(state, payload) {
            state.product = payload;
        }
    },
    actions: {
        async goToProductDetail(_, productId) {
            router.push({ name: 'ProductDetail', params: { productId } });
        },
        async getProductDetail({ commit }, productId) {
            const response = await Services.get(API.productdetail.replace("{id}", productId));
            commit('SET_PRODUCT_DETAIL', response.data);
        }
    },
    getters: {
        getProductDetail: (state) => state.product,
    },
    namespaced: true
};

export default productDetail;
