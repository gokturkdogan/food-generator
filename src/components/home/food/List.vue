<template>
  <div class="categoryList">
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </div>
</template>
      
<script>
import Item from './Item.vue';
export default {
  name: "FoodList",
  components: {
    Item
  },
};
</script>
<style lang="scss" scoped>
</style>
    