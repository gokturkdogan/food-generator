<template>
  <div v-if="loader" class="categoryList -loader">
    <img class="categoryList__loader" src="../../assets//images//logos/loader.gif" />
  </div>
  <div v-else class="categoryList">
    <Item v-for="(subcategory, index) in subCategories" :key="index" :subcategory="subcategory"/>
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
    justify-content: flex-start;
    justify-content: space-between;
    padding: 0 15px 50px 15px;
    height: fit-content;
    max-height: calc(100vh - 350px);
    overflow-y: scroll;

    &.-loader {
      justify-content: center;
      align-items: center;
      height: calc(100vh - 350px);
    }

    &__loader {
      width: 200px;
    }
}
</style>
    