import Services from '../../config/_axios';
import API from '../../api';

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
      state.selectedProduct = payload;
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
        console.error('Kategori verisi alınırken bir hata oluştu:', error);
      }
    },
    async changeCategory({ commit, dispatch }, categoryId) {
      await commit('SET_ACTIVE_CATEGORY_ID', categoryId);
      commit('SET_CATEGORY_LOADER', true);
      dispatch('getSubCategories');
    },
    async getSubCategories({ commit, state }) {
      try {
        const url = API.subcategories.replace("{id}", state.activeCategoryId);
        const response = await Services.get(url);
        commit('SET_SUB_CATEGORIES', response.data);
      } catch (error) {
        console.error('Kategori verisi alınırken bir hata oluştu:', error);
      } finally {
        setTimeout(() => {
          commit('SET_CATEGORY_LOADER', false);
        }, 500);
      }
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
        console.error('Kategori verisi alınırken bir hata oluştu:', error);
      }
    },
    async getRandomProduct({ commit, state }) {
      try {
        const randomIndex = Math.floor(Math.random() * state.products.length);
        const randomProduct = state.products[randomIndex];
        const response = await Services.get(API.productdetail.replace("{id}", randomProduct.id));
        commit('SET_SELECTED_PRODUCT', response.data);
      } catch (error) {
        console.error("Rastgele ürün seçilirken bir hata oluştu:", error);
      }
    },
    async updateFavorites({ state, commit }, {productId, isFavorite}) {
      try {
        const product = state.products.find(product => product.id === productId);
        if (product) {
          const updatedProduct = {
            ...product,
            isFavorite: !isFavorite
          };
          const url = API.productdetail.replace("{id}", productId);
          await Services.put(url, updatedProduct);
          const selectedProduct = await Services.get(API.productdetail.replace("{id}", productId));
          commit('SET_SELECTED_PRODUCT', selectedProduct.data);
        } else {
          console.warn("Belirtilen productId ile eşleşen ürün bulunamadı.");
        }
      } catch (error) {
        console.error("Favoriler güncellenirken bir hata oluştu:", error);
      }
    }
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