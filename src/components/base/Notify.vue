<template>
  <div v-if="notify.isShow" :class="['notify', notifyClass]">
    <WarningIcon v-if="notify.type === 'warning'" />
    <ErrorIcon v-if="notify.type === 'error'" />
    <SuccessIcon v-if="notify.type === 'success'" />
    <span class="notify__text">{{ notify.message }}</span>
  </div>
</template>
    
<script>
import WarningIcon from "../../assets/images/icons/warning-icon.vue";
import ErrorIcon from "../../assets/images/icons/error-icon.vue";
import SuccessIcon from "../../assets/images/icons/success-icon.vue";

export default {
  name: "Header",
  components: {
    WarningIcon,
    ErrorIcon,
    SuccessIcon,
  },
  computed: {
    notify() {
      return this.$store.getters["notify/getNotify"];
    },
    notifyClass() {
      return this.notify.type ? `-` + this.notify.type : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.notify {
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 100;
  right: 10px;
  top: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgb(255, 255, 255);
  padding: 20px 10px;
  width: 200px;
  border-left: 5px solid;

  &.-error {
    border-color: #ff0000;
  }

  &.-warning {
    border-color: #ff8800;
  }

  &.-success {
    border-color: #4de910;
  }

  &__text {
    font-size: 12px;
    margin-left: 10px;
  }
}
</style>