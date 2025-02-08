<template>
  <div class="splash">
    <img
      class="splash__logo"
      src="../../assets/images/logos/splash.png"
      alt="logo"
    />
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.splash {
  height: 100vh;
  background: linear-gradient(#fff700, #f10505);
  display: flex;
  justify-content: center;
  align-items: center;

  &__logo {
    width: 300px;
    filter: invert(100%);
  }
}
</style>