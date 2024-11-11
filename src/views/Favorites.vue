<template>
    <div class="favorites" :class="{ '-loader': loader }">
      <img class="favorites__loader" v-if="loader" src="../assets/images/logos/output-onlinegiftools.gif" alt="loader">
      <div v-else>
        <div v-if="favoriteEmpty" class="favorites__empty">
          <EmptyIcon class="favorites__emptyIcon"/>
          <p class="favorites__emptyText">
            Favorilerinizde ürün bulunmuyor lütfen <span class="favorites__emptyLink">Anasayfa</span> üzerinden ürün ekleyiniz
          </p>
        </div>
        <List v-else />
      </div>
    </div>
</template>
<script>
import List from '../components/favorites/List.vue';
import EmptyIcon from '../assets/images/icons/header-logo-icon.vue';
import Loader from '../assets/images/logos/loader.gif';
export default {
  name: "HomePage",
  data() {
    return {
      loader: true
    }
  },
  components: {
    List,
    EmptyIcon,
    Loader
  },
  async created() {
    await this.$store.dispatch('favorites/getFavorites');
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  },
  computed: {
    favoriteEmpty() {
      return this.$store.getters['favorites/getFavorites'].length === 0
    }
  }
};
</script>
<style lang="scss" scoped>
.favorites {
  &.-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 350px);
  }

  &__loader {
    width: 200px;
  }

  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
  }

  &__emptyIcon {
    border: none;
    padding: 0;
    border-radius: 0;
    height: 100px;
    width: 100px;
    fill: $orange-500;
  }

  &__emptyText {
    text-align: center;
    margin-top: 40px;
    font-size: 20px;
  }

  &__emptyLink {
    font-weight: 600;
    color: $orange-500;
  }
}
</style>