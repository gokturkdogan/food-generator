<template>
  <div class="detail" :class="{ '-loader': loader }">
    <img
      class="detail__loader"
      v-if="loader"
      src="../assets/images/loaders/loader.gif"
      alt="loader"
    />
    <div v-else class="detail">
      <div class="detail__title">
        {{ product.name }}
      </div>
      <Cart :product="product" />
    </div>
  </div>
</template>
<script>
import Cart from "../components/product-detail/Cart.vue";
export default {
  name: "ProductDetail",
  data() {
    return {
      loader: true,
    };
  },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  components: {
    Cart
  },
  async created() {
    await this.$store.dispatch("category/getProductList");
    await this.$store.dispatch("productDetail/getProductDetail", this.productId);
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  },
  computed: {
    product() {
      return this.$store.getters["productDetail/getProductDetail"];
    },
  },
};
</script>
<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  width: 100%;

  &.-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 57px;
  }

  &__loader {
    width: 200px;
  }

  &__title {
    font-size: 26px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: 2px solid $black;
  }
}
</style>