<template>
    <div class="favorites">
        <List />
    </div>
</template>
<script>
import List from '../components/favorites/List.vue';
export default {
  name: "HomePage",
  components: {
    List
  },
  created() {
    this.$store.dispatch('favorites/getFavorites');
  }
};
</script>
<style lang="scss" scoped>

</style>