<template>
  <div class="categoryList" :class="{ '-loader': loader }">
    <img v-if="loader" class="categoryList__loader" src="../../assets//images/loaders/loader.gif" />
    <Item v-else v-for="(subcategory, index) in subCategories" :key="index" :subcategory="subcategory"/>
  </div>
</template>
      
<script>
import Item from './Item.vue';
export default {
  name: "FoodList",
  components: {
    Item
  },
  created() {
    this.$store.dispatch('category/getSubCategories');
  },
  computed: {
    subCategories() {
      return this.$store.getters['category/getSubCategories'];
    },
    loader() {
      return this.$store.getters["category/getCategoryLoader"];
    }
  }
};
</script>
<style lang="scss" scoped>
.categoryList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 15px 50px 15px;
    overflow-y: scroll;

    &.-loader {
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    &__loader {
      width: 200px;
    }
}
</style>
    