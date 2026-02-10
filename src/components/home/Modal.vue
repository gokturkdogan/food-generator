<template>
  <div v-if="modal.isShow" class="modal">
    <div class="modal__overlay">
      <div class="modal__wrapper">
        <div class="modal__header">
          <XMarkIcon @click="closeModal()" />
        </div>
        <div class="modal__body">
          <img
            v-if="modal.loader"
            class="modal__loader"
            src="../../assets/images/loaders/randomizer-loader.gif"
            alt=""
          />
          <div class="modal__content" v-else>
            <img
              @click="goToDetail(selectedProduct.productId)"
              class="modal__image"
              :src="selectedProduct.image"
              alt="product"
            />
            <div class="modal__text">
              <span class="modal__name">{{ selectedProduct.name }}</span>
              <span
                class="modal__fav"
                @click="addFavorites(selectedProduct.productId)"
              >
                <FavIcon
                  v-if="selectedProduct.isFavorite"
                  class="modal__icon"
                />
                <FavIconEmpty v-else class="modal__icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
          
<script>
import XMarkIcon from "../../assets/images/icons/x-mark-icon.vue";
import FavIconEmpty from "../../assets/images/icons/favorite-empty-icon.vue";
import FavIcon from "../../assets/images/icons/favorite-icon.vue";
export default {
  name: "Modal",
  components: {
    XMarkIcon,
    FavIcon,
    FavIconEmpty,
  },
  methods: {
    closeModal() {
      this.$store.commit("category/SET_MODAL", { isShow: false, loader: true });
    },
    addFavorites(productId) {
      if (this.selectedProduct.isFavorite) {
        this.$store.dispatch("favorites/deleteFavorites", { productId });
      } else {
        this.$store.dispatch("favorites/addFavorites");
      }
    },
    async goToDetail(productId) {
      await this.$store.dispatch("productDetail/goToProductDetail", productId);
      this.$store.commit("category/SET_MODAL", { isShow: false });
    },
  },
  computed: {
    modal() {
      return this.$store.getters["category/getModal"];
    },
    selectedProduct() {
      return this.$store.getters["category/getRandomProduct"];
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  &__overlay {
    background-color: #00000080;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;

    @include desktop {
      width: 30%;
    }
  }

  &__wrapper {
    position: absolute;
    background-color: $white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    width: 90%;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }

  &__body {
    padding: 0 40px 40px;
    display: flex;
    justify-content: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image {
    width: 200px;
  }

  &__text {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__name {
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 23px;
  }

  &__fav {
    display: flex;
  }

  &__icon {
    height: 30px;
    width: 30px;
    margin-left: 30px;
  }
}
</style>
        