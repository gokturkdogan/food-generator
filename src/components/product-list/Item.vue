<template>
  <div @click="goToDetail(product.productId)" class="productItem">
    <div v-if="loader" class="productItem__loader">
      <img
        class="productItem__gif"
        src="../../assets/images/loaders/loader.gif"
        alt="loader"
      />
    </div>
    <div v-else class="productItem__content">
      <img :src="product.image" alt="productItem" class="productItem__image" />
      <div class="productItem__data">
        <div class="productItem__text">
          <span class="productItem__title">
            {{ product.name }}
          </span>
          <span class="productItem__subtitle">
            {{ product.categoryName }} / {{ product.subCategoryName }}
          </span>
        </div>
        <div
          v-if="product.isFavorite"
          class="productItem__action"
          @click="deleteFavorites(product.productId)"
        >
          <FavIcon />
        </div>
        <div
          v-else
          class="productItem__action"
          @click="addFavorites(product.productId)"
        >
          <FavIconEmpty />
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import FavIcon from "../../assets/images/icons/favorite-icon.vue";
import FavIconEmpty from "../../assets/images/icons/favorite-empty-icon.vue";
export default {
  name: "ProductItem",
  data() {
    return {
      loader: false,
    };
  },
  components: {
    FavIcon,
    FavIconEmpty,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteFavorites(productId) {
      this.loader = true;
      await this.$store.dispatch("favorites/deleteFavorites", { productId });
      this.loader = false;
    },
    async addFavorites(productId) {
      this.loader = true;
      await this.$store.dispatch("favorites/addFavoritesFromProductList", {
        productId,
      });
      this.loader = false;
    },
    async goToDetail(productId) {
      this.$store.dispatch("productDetail/goToProductDetail", productId);
    },
  },
};
</script>
  <style lang="scss" scoped>
.productItem {
  position: relative;
  background-color: $white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  height: 130px;
  padding: 10px;
  border-radius: 15px;
  margin-top: 50px;

  &__image {
    width: 130px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__loader {
    display: flex;
    justify-content: center;
  }

  &__gif {
    width: 150px;
  }

  &__data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 75px;
    height: 100%;
    padding-right: 20px;
  }

  &__text {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 22px;
  }

  &__subtitle {
    color: $subtitle;
    font-size: 16px;
    margin-top: 15px;
  }
}
</style>