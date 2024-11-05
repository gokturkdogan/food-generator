<template>
    <div class="layout">
      <Header />
      <router-view />
      <AppBar />
    </div>
  </template>
  
  <script>
  import Header from '../components/base/Header.vue';
  import AppBar from '../components/base/AppBar.vue';
  export default {
    name: "Layout",
    components: {
      Header,
      AppBar
    }
  };
  </script>
  <style lang="scss" scoped>
  .layout {
    padding-bottom: 100px;
  }
</style>
  