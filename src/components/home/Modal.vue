<template>
  <div v-if="modalIsShow" class="modal">
    <div class="modal__overlay">
      <div class="modal__wrapper">
        <div class="modal__header">
          <XMarkIcon @click="closeModal()"/>
        </div>
        <div class="modal__body">
          <iframe class="modal__loader" src="https://lottie.host/embed/7fd0a2c1-47ea-4c90-af48-567c00a89532/MZX9DyMM53.json"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
          
<script>
import XMarkIcon from '../../assets/images/icons/x-mark-icon.vue';
export default {
  name: "Modal",
  components: {
    XMarkIcon
  },
  methods: {
    closeModal() {
      this.$store.commit('category/SET_MODAL', { isShow: false });
    }
  },
  computed: {
    modalIsShow() {
      return this.$store.getters['category/getModal'].isShow;
    }
  }
};
</script>
<style lang="scss" scoped>
.modal {
  &__overlay {
    background-color: #00000080;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  &__wrapper {
    position: absolute;
    background-color: $white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;  }

  &__header {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }

  &__body {
    padding: 0 20px 20px;
  }

  &__loader {
    border: none;
  }
}
</style>
        