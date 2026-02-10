<template>
  <div class="layout">
    <Header />
    <router-view
      class="layout__content"
      :class="{ '-notHomePage': isNotHomePage, '-detailPage': isDetailPage }"
    />
    <AppBar />
    <Modal />
    <Notify />
  </div>
</template>
  
<script>
import Header from "../components/base/Header.vue";
import AppBar from "../components/base/AppBar.vue";
import Modal from "../components/home/Modal.vue";
import Notify from "../components/base/Notify.vue";
export default {
  name: "Layout",
  components: {
    Header,
    AppBar,
    Modal,
    Notify,
  },
  async created() {
    await this.$store.dispatch("category/getCategories");
    await this.$store.dispatch("category/getSubCategories");
  },
  computed: {
    isNotHomePage() {
      return (
        this.$route.name === "Favorites" || this.$route.name === "ProductList"
      );
    },
    isDetailPage() {
      return this.$route.name === "ProductDetail";
    },
  },
};
</script>
<style lang="scss" scoped>
.layout {
  padding-bottom: 100px;

  &__content {
    position: absolute;
    bottom: 65px;
    top: 235px;
    overflow-y: scroll;
    width: 100%;

    &.-notHomePage {
      top: 178px;
    }

    &.-detailPage {
      top: 100px;
    }
  }
}
</style>
