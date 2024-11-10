<template>
  <div class="favoritesItem">
    <img v-if="loader" class="favoritesItem__loader" src="../../assets/images/logos/output-onlinegiftools.gif" alt="loader">
    <img v-else :src="favorite.image" alt="favorite" class="favoritesItem__image">
    <div class="favoritesItem__content">
        <div class="favoritesItem__text">
            <span class="favoritesItem__title">
                {{ favorite.name }}
            </span>
            <span class="favoritesItem__subtitle">
                Yemek / Pizza
            </span>
        </div>
        <div class="favoritesItem__action" @click="updateFavorites(favorite.productId)">
            <FavIcon />
        </div>
    </div>
  </div>
</template>
<script>
import FavIcon from '../../assets/images/icons/favorite-icon.vue';
export default {
  name: "FavoritesItem",
  data() {
    return {
      loader: false
    }
  },
  components: {
    FavIcon
  },
  props: {
    favorite: {
      type: Object,
      required: true,
    },
  },
  created() {},
  methods: {
    async updateFavorites(productId) {
      this.loader = true;
      await this.$store.dispatch('favorites/updateFavorites', { productId, isFavorite: true });
      this.loader = false;
    }
  }
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
    width: 150px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__content {
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