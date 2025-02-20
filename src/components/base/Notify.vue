<template>
  <div class="notify">
    Başarı ile favorilere atıldı
  </div>
</template>
    
<script>
export default {
  name: "Header",
  components: {},
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
.notify {
    position: fixed;
    z-index: 100;
    right: 10px;
    top: 40px;
    background-color: aqua;
    padding: 20px;
    width: 150px;
    font-size: 12px;
}
</style>
