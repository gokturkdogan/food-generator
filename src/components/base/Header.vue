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
        <input class="header__input" type="text" placeholder="Kategori ara" />
      </div>
      <div class="header__filter">
        <ConfigIcon />
      </div>
    </div>
    <div class="header__categories">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="header__categoryItem"
        :class="{ '-active': activeCategoryId === category.id }"
        @click="changeCategory(category.id)"
      >
        <div class="header__categoryIcon" v-html="category.image"></div>
        <span class="header__categoryText">{{ category.name }}</span>
      </div>
    </div>
  </div>
</template>
  
<script>
import HeaderLogoIcon from "../../assets/images/icons/header-logo-icon.vue";
import SearchIcon from "../../assets/images/icons/search-icon.vue";
import ConfigIcon from "../../assets/images/icons/config-icon.vue";

export default {
  name: "Header",
  components: {
    HeaderLogoIcon,
    SearchIcon,
    ConfigIcon,
  },
  methods: {
    changeCategory(categoryId) {
      this.$store.dispatch("category/changeCategory", categoryId);
    },
  },
  computed: {
    categories() {
      return this.$store.getters["category/getCategories"];
    },
    activeCategoryId() {
      return this.$store.getters["category/getActiveCategoryId"];
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.08) 1px 6px 5px 0px;

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
    background-color: #e7e7e7;
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
      color: #cecece;
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

  &__categoryIcon {
    height: 25px;
    width: 25px;
    fill: $black;
    background-color: $white;
    padding: 4px;
    border-radius: 100%;
  }

  &__categoryText {
    margin-left: 5px;
  }
}
</style>
