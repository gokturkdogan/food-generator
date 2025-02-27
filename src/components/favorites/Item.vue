<template>
  <div @click="goToDetail(favorite.productId)" class="favoritesItem">
    <div v-if="loader" class="favoritesItem__loader">
      <img
        class="favoritesItem__gif"
        src="../../assets/images/loaders/loader.gif"
        alt="loader"
      />
    </div>
    <div v-else class="favoritesItem__content">
      <img :src="favorite.image" alt="favorite" class="favoritesItem__image" />
      <div class="favoritesItem__data">
        <div class="favoritesItem__text">
          <span class="favoritesItem__title">
            {{ favorite.name }}
          </span>
          <span class="favoritesItem__subtitle">
            {{ favorite.categoryName }} / {{ favorite.subCategoryName }}
          </span>
        </div>
        <div
          class="favoritesItem__action"
          @click="deleteFavorites(favorite.productId)"
        >
          <FavIcon />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FavIcon from "../../assets/images/icons/favorite-icon.vue";
export default {
  name: "FavoritesItem",
  data() {
    return {
      loader: false,
    };
  },
  components: {
    FavIcon,
  },
  props: {
    favorite: {
      type: Object,
      required: true,
    },
  },
  created() {},
  methods: {
    async deleteFavorites(productId) {
      this.loader = true;
      await this.$store.dispatch("favorites/deleteFavorites", { productId });
      this.loader = false;
    },
    async goToDetail(productId) {
      this.$store.dispatch("productDetail/goToProductDetail", productId);
    },
  },
};
</script>
<style lang="scss" scoped>
.favoritesItem {
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