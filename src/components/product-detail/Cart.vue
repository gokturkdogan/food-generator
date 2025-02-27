<template>
  <div class="cart">
    <img :src="product.image" alt="product" class="cart__image" />
    <div class="cart__info">
      <span class="cart__tag -category">
        {{ product.categoryName }}
      </span>
      <span class="cart__tag -subCategory">
        {{ product.subCategoryName }}
      </span>
      <span class="cart__tag -favorite">
        Favorilerde mi
        <FavIcon class="cart__icon" v-if="product.isFavorite" />
        <FavIconEmpty class="cart__icon" v-else />
      </span>
      <span class="cart__tag -id">
        {{ product.productId }}
      </span>
    </div>
    <div class="cart__acitons">
      <button
        @click="favorite(product.isFavorite)"
        class="cart__button"
        :class="{ '-loader': loader }"
      >
        <img
          class="cart__loader"
          v-if="loader"
          src="../../assets/images/loaders/loader.gif"
          alt="loader"
        />
        <span v-else>{{ buttonText }}</span>
      </button>
    </div>
  </div>
</template>
<script>
import FavIcon from "../../assets/images/icons/favorite-icon.vue";
import FavIconEmpty from "../../assets/images/icons/favorite-empty-icon.vue";
export default {
  name: "ProductDetailCart",
  data() {
    return {
      loader: false,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    FavIcon,
    FavIconEmpty,
  },
  computed: {
    buttonText() {
      if (this.product.isFavorite) {
        return "Favorilerden Kaldır";
      } else {
        return "Favorilere Ekle";
      }
    },
  },
  methods: {
    async favorite(isFavorite) {
      this.loader = true;
      if (isFavorite) {
        await this.$store.dispatch("favorites/deleteFavorites", {
          productId: this.product.productId,
        });
      } else {
        await this.$store.dispatch("favorites/addFavoritesFromProductList", {
          productId: this.product.productId,
        });
      }
      await this.$store.dispatch(
        "productDetail/getProductDetail",
        this.product.productId
      );
      this.loader = false;
    },
  },
};
</script>
  <style lang="scss" scoped>
.cart {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 50px;
  padding: 50px 20px 30px 20px;
  border-radius: 15px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__image {
    width: 250px;
  }

  &__info {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__tag {
    background-color: $orange-100;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 13px;
    display: flex;
    align-items: center;

    &.-category {
      background-color: rgb(255, 161, 161);
      border: 2px solid rgb(189, 9, 9);
      color: rgb(189, 9, 9);
    }

    &.-subCategory {
      background-color: rgb(161, 225, 255);
      border: 2px solid rgb(9, 161, 255);
      color: rgb(9, 161, 255);
    }

    &.-favorite {
      background-color: $orange-100;
      border: 2px solid $orange-500;
      color: $orange-500;
    }

    &.-id {
      background-color: rgb(255, 230, 161);
      border: 2px solid rgb(255, 148, 9);
      color: rgb(255, 148, 9);
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }

  &__acitons {
    margin-top: 30px;
    width: 100%;
  }

  &__button {
    width: 100%;
    border: none;
    background: $orange-100;
    padding: 10px;
    border-radius: 10px;
    color: $orange-500;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    height: 60px;

    &.-loader {
      background-color: $white;
      border: 1px solid $orange-500;
    }
  }

  &__loader {
    width: 50px;
  }
}
</style>