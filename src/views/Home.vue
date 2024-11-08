<template>
    <div class="home">
        <List />
        <Modal />
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
  }
};
</script>
<style lang="scss" scoped>

</style>