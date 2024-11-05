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
    this.$store.dispatch('category/getCategories');
  },
  computed: {
    categories() {
      return this.$store.getters['category/getCategories'];
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
    