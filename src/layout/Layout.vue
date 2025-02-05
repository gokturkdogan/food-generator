<template>
  <div class="layout">
    <Header />
    <router-view class="layout__content" :class="{ '-notHomePage': isNotHomePage }"/>
    <AppBar />
    <Modal />
  </div>
</template>
  
<script>
import Header from "../components/base/Header.vue";
import AppBar from "../components/base/AppBar.vue";
import Modal from "../components/home/Modal.vue";
export default {
  name: "Layout",
  components: {
    Header,
    AppBar,
    Modal,
  },
  async created() {
    await this.$store.dispatch("category/getCategories");
    await this.$store.dispatch('category/getSubCategories');
  },
  computed: {
    isNotHomePage() {
      return this.$route.name === 'Favorites' || this.$route.name === 'ProductList';
    }
  }
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
  }
}
</style>
