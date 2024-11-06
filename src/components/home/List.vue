<template>
  <div class="categoryList">
    <Item v-for="(category, index) in categories" :key="index" :category="category"/>
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
    categories() {
      return this.$store.getters['category/getCategories'];
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
}
</style>
    