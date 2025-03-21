<template>
  <div>
    <Splash v-if="splash" />
    <Layout v-else />
  </div>
</template>

<script>
import Layout from "./layout/Layout.vue";
import Splash from "./components/base/Splash.vue";
export default {
  name: "App",
  data() {
    return {
      splash: true,
    };
  },
  components: {
    Layout,
    Splash,
  },
  created() {
    this.removeSplash();
  },
  methods: {
    removeSplash() {
      setTimeout(() => {
        this.splash = false;
      }, 5000);
    },
  },
};
</script>
