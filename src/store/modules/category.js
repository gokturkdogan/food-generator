import Services from '../../config/_axios';
import API from '../../api';
import i18n from '../../i18n';

const category = {
  state: () => ({
    categories: [],
    activeCategoryId: "1",
    subCategories: [],
    products: [],
    selectedProduct: {},
    modal: {
      isShow: false,
      loader: true
    },
    categoryLoader: true,
    previousIndex: null,
  }),
  mutations: {
    SET_CATEGORIES(state, payload) {
      state.categories = payload;
    },
    SET_ACTIVE_CATEGORY_ID(state, payload) {
      state.activeCategoryId = payload;
    },
    SET_SUB_CATEGORIES(state, payload) {
      state.subCategories = payload;
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_SELECTED_PRODUCT(state, payload) {
      state.selectedProduct = {
        ...state.selectedProduct,
        ...payload,
      };
    },
    SET_MODAL(state, payload) {
      state.modal = {
        ...state.modal,
        ...payload
      };
    },
    SET_CATEGORY_LOADER(state, payload) {
      state.categoryLoader = payload;
    },
  },
  actions: {
    async getCategories({ commit }) {
      try {
        const response = await Services.get(API.categories);
        commit('SET_CATEGORIES', response.data);
      } catch (error) {
        console.error(i18n.global.t('notify.category.error'), error);
      }
    },
    async changeCategory({ commit, dispatch }, categoryId) {
      await commit('SET_ACTIVE_CATEGORY_ID', categoryId);
      commit('SET_CATEGORY_LOADER', true);
      dispatch('getSubCategories');
    },
    async getSubCategories({ commit, state }) {
      await commit('SET_CATEGORY_LOADER', true);
      const activeCategory = state.categories.find(
        category => category.categoryId === state.activeCategoryId
      );
      await commit('SET_SUB_CATEGORIES', activeCategory.subcategories);
      setTimeout(() => {
        commit('SET_CATEGORY_LOADER', false);
      }, 1000);
    },
    async getProducts({ commit, dispatch }, subCategoryId) {
      try {
        const url = API.products.replace("{id}", subCategoryId);
        const response = await Services.get(url);
        await commit('SET_PRODUCTS', response.data);
        await dispatch('getRandomProduct');
        commit('SET_MODAL', { isShow: true });
        setTimeout(() => {
          commit('SET_MODAL', { loader: false });
        }, 2000);
      } catch (error) {
        console.error(i18n.global.t('notify.category.error'), error);
      }
    },
    async getRandomProduct({ commit, state }) {
      try {
        let randomIndex;
        if (state.products.length === 1) {
          randomIndex = 0;
        } else {
          do {
            randomIndex = Math.floor(Math.random() * state.products.length);
          } while (randomIndex === state.previousIndex);
        }
        state.previousIndex = randomIndex;
        const randomProduct = state.products[randomIndex];
        const response = await Services.get(API.productdetail.replace("{id}", randomProduct.productId));
        commit('SET_SELECTED_PRODUCT', response.data);
      } catch (error) {
        console.error(i18n.global.t('notify.randomizer.error'), error);
      }
    },
    async getProductList({ commit }) {
      try {
          const response = await Services.get(API.favorites);
          commit('SET_PRODUCTS', response.data);
      } catch (error) {
          console.error(i18n.global.t('notify.products.error'), error);
      }
  },
  },
  getters: {
    getCategories: (state) => state.categories,
    getActiveCategoryId: (state) => state.activeCategoryId,
    getSubCategories: (state) => state.subCategories,
    getProducts: (state) => state.products,
    getRandomProduct: (state) => state.selectedProduct,
    getModal: (state) => state.modal,
    getCategoryLoader: (state) => state.categoryLoader,
  },
  namespaced: true
};

export default category;