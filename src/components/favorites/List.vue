<template>
  <div class="favoritesList">
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </div>
</template>
<script>
import Item from "./Item.vue";
export default {
  name: "FavoritesList",
  components: {
    Item,
  },
  created() {},
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