<template>
  <div class="appBar">
    <div class="appBar__side">
      <HomeIcon />
      <FavIcon />
    </div>
    <div class="appBar__mid">
      <DiceIcon />
    </div>
    <div class="appBar__side">
      <MessageIcon />
      <userIcon />
    </div>
  </div>
</template>
    
<script>
import HomeIcon from "../../assets/images/icons/home-icon.vue";
import FavIcon from "../../assets/images/icons/favorite-icon.vue";
import MessageIcon from "../../assets/images/icons/message-icon.vue";
import userIcon from "../../assets/images/icons/user-icon.vue";
import DiceIcon from "../../assets/images/icons/dice-icon.vue";

export default {
  name: "Appbar",
  components: {
    HomeIcon,
    FavIcon,
    MessageIcon,
    userIcon,
    DiceIcon,
  },
};
</script>
<style lang="scss" scoped>
.appBar {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  background-color: $white;
  box-shadow: rgba(0, 0, 0, 0.08) -1px -6px 5px 0px;
  align-items: center;

  @include desktop {
    width: 30%;
  }

  &__mid {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $orange-500;
    padding: 15px;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  }

  &__side {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    width: 30%;
  }
}
</style>
  