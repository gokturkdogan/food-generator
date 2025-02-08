<template>
  <div class="products" :class="{ '-loader': loader }">
    <img
      class="products__loader"
      v-if="loader"
      src="../assets/images/loaders/loader.gif"
      alt="loader"
    />
    <div v-else>
      <List />
    </div>
  </div>
</template>
<script>
import List from "../components/product-list/List.vue";
import EmptyIcon from "../assets/images/icons/header-logo-icon.vue";
export default {
  name: "ProductList",
  data() {
    return {
      loader: true,
    };
  },
  components: {
    List,
    EmptyIcon,
  },
  async created() {
    await this.$store.dispatch("category/getProductList");
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  },
  computed: {
    products() {
      return this.$store.getters["category/getProducts"];
    },
  },
};
</script>
<style lang="scss" scoped>
.products {
  &.-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 57px;
  }

  &__loader {
    width: 200px;
  }
}
</style>