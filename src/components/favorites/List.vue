<template>
  <div class="favoritesList">
    <Item v-for="(favorite, index) in favorites" :key="index" :favorite="favorite"/>
  </div>
</template>
<script>
import Item from "./Item.vue";
export default {
  name: "FavoritesList",
  components: {
    Item,
  },
  created() {
    this.$store.dispatch('favorites/getFavorites');
  },
  computed: {
    favorites() {
      return this.$store.getters['favorites/getFavorites'];
    }
  }
};
</script>
<style lang="scss" scoped>
.favoritesList {
  padding: 0 15px 50px 75px;
  height: fit-content;
  max-height: calc(100vh - 310px);
  overflow-y: scroll;
}
</style> 