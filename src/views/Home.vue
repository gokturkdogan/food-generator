<template>
    <div class="home">
        <List />
        <Modal v-if="modal" />
    </div>
</template>
<script>
import List from '../components/home/List.vue';
import Modal from '../components/home/Modal.vue';
export default {
  name: "HomePage",
  components: {
    List,
    Modal
  },
  computed: {
    modal() {
      return this.$store.getters['category/getModal'].isShow;
    }
  }
};
</script>
<style lang="scss" scoped>

</style>