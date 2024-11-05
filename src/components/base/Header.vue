<template>
  <div class="header">
    <div class="header__banner">
      <div class="header__text">
        <div class="header__title">Merhaba, Kullanıcı</div>
        <HeaderLogoIcon class="header__logo" />
      </div>
      <div class="header__subtitle">Bugün ne yemek istersin?</div>
    </div>
    <div class="header__config">
      <div class="header__search">
        <SearchIcon />
        <input class="header__input" type="text" placeholder="Kategori ara">
      </div>
      <div class="header__filter">
        <ConfigIcon />
      </div>
    </div>
    <div class="header__categories">
      <div class="header__categoryItem -active">
        <CategoryFoodIcon />
        <span class="header__categoryText">Yemek</span>
      </div>
      <div class="header__categoryItem">
        <CategoryDrinkIcon />
        <span class="header__categoryText">içecek</span>
      </div>
      <div class="header__categoryItem">
        <CategoryDesertIcon />
        <span class="header__categoryText">Tatlı</span>
      </div>
    </div>
  </div>
</template>
  
<script>
import HeaderLogoIcon from "../../assets/images/icons/header-logo-icon.vue";
import SearchIcon from "../../assets/images/icons/search-icon.vue";
import ConfigIcon from "../../assets/images/icons/config-icon.vue";
import CategoryFoodIcon from "../../assets/images/icons/category-food-icon.vue";
import CategoryDrinkIcon from "../../assets/images/icons/category-drink-icon.vue";
import CategoryDesertIcon from "../../assets/images/icons/category-desert-icon.vue";

export default {
  name: "Header",
  components: {
    HeaderLogoIcon,
    SearchIcon,
    ConfigIcon,
    CategoryFoodIcon,
    CategoryDrinkIcon,
    CategoryDesertIcon
  },
};
</script>
<style lang="scss" scoped>
.header {
  padding: 15px;
  &__text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 30px;
    letter-spacing: 1px;
    color: $black;
  }

  &__subtitle {
    color: $subtitle;
    font-weight: 500;
  }

  &__config {
    margin-top: 30px;
  }

  &__search {
    display: flex;
    align-items: center;
    background-color: #E7E7E7;
    padding: 15px;
    width: 70%;
    border-radius: 20px;
  }

  &__input {
    border: none;
    background: none;
    width: 100%;
    margin-left: 10px;
    color: #9f9f9f;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #CECECE;
    }
  }

  &__config {
    display: flex;
    justify-content: space-between;
  }

  &__filter {
    background-color: $orange-500;
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 20px;
  }

  &__categories {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  &__categoryItem {
    background-color: $orange-100;
    display: flex;
    align-items: center;
    color: $white;
    font-size: 12px;
    border-radius: 20px;
    padding: 2px 10px 2px 2px;
    width: 25%;

    &.-active {
      background-color: $orange-500;
    }
  }

  &__categoryText {
    margin-left: 5px;
  }
}
</style>
