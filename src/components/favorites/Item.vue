<template>
  <div class="favoritesItem">
    <img src="https://res.cloudinary.com/doar0vpnc/image/upload/v1731052567/product-photos/foods/pizza/mediterrenian.png" alt="favorite" class="favoritesItem__image">
    <div class="favoritesItem__content">
        <div class="favoritesItem__text">
            <span class="favoritesItem__title">
                Karışık Pizza
            </span>
            <span class="favoritesItem__subtitle">
                Yemek / Pizza
            </span>
        </div>
        <div class="favoritesItem__action">
            <FavIcon />
        </div>
    </div>
  </div>
</template>
<script>
import FavIcon from '../../assets/images/icons/favorite-icon.vue';
export default {
  name: "FavoritesItem",
  components: {
    FavIcon
  },
  created() {},
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