<template>
  <div class="appBar">
    <div class="appBar__side">
      <span class="appBar__link" :class="{ '-active': activeRoute === 'Home' }">
        <HomeIcon @click="changeRoute('Home')"/>
      </span>
      <span class="appBar__link" :class="{ '-active': activeRoute === 'Favorites' }">
        <FavIcon @click="changeRoute('Favorites')"/>
      </span>
    </div>
    <div class="appBar__mid">
        <DiceIcon />
    </div>
    <div class="appBar__side">
      <span class="appBar__link">      
        <MessageIcon />
      </span>
      <span class="appBar__link">
        <userIcon />
      </span>
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
  methods: {
    changeRoute(destination) {
      this.$router.push({ name: destination });
    }
  },
  computed: {
    activeRoute() {
      return this.$route.name;
    }
  }
};
</script>
<style lang="scss" scoped>
.appBar {
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 5px 0;
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

  &__link {
    padding-bottom: 10px;
    width: 50px;
    display: flex;
    justify-content: center;

    &.-active {
      border-bottom: 5px solid $orange-500;
      background: $orange-100;
      background: linear-gradient(to top, $orange-300 0%, transparent 100%); /* $orange-500 yerine renk kodu */
      clip-path: polygon(0% 0%, 100% 0%, 70% 100%, 30% 100%);
    }
  }
}
</style>
  