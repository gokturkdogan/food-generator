<template>
  <div class="productList">
    <Item
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>
  <script>
import Item from "./Item.vue";
export default {
  name: "ProductList",
  components: {
    Item,
  },
  created() {
    this.$store.dispatch("category/getProductList");
  },
  computed: {
    products() {
      return this.$store.getters["category/getProducts"];
    },
  },
};
</script>
  <style lang="scss" scoped>
.productList {
  padding: 0 15px 50px 75px;
}
</style> 