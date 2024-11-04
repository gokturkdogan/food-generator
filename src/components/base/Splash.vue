<template>
  <div class="splash">
    <div class="splash__logo">
      <img
        class="splash__logo"
        src="../../assets/images/logos/splash.png"
        alt="logo"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.splash {
  height: 100vh;
  background: $splash-Bg;
  display: flex;
  justify-content: center;
  align-items: center;

  &__logo {
    width: 200px;
  }
}
</style>