<template>
  <div class="categoryItem">
    <img class="categoryItem__image" :src="category.image" alt="category" />
    <div class="categoryItem__title">{{ category.name }}</div>
    <div class="categoryItem__subtitle">{{ category.text }}</div>
    <div class="categoryItem__actions">
      <span class="categoryItem__actionText">Zar atmak için tıkla</span>
      <span class="categoryItem__actionButton"><CategoryItemDiceIcon /></span>
    </div>
  </div>
</template>
        
<script>
import CategoryItemDiceIcon from "../../assets/images/icons/category-item-dice-icon.vue";
export default {
  name: "FoodItem",
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  components: {
    CategoryItemDiceIcon,
  },
};
</script>
<style lang="scss" scoped>
.categoryItem {
  position: relative;
  background-color: $white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: fit-content;
  max-height: 170px;
  padding: 10px;
  border-radius: 15px;
  margin-top: 80px;
  &__image {
    width: 130px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__title {
    margin-top: 70px;
    font-weight: 600;
    letter-spacing: 1px;
    color: $black;
    font-size: 14px;
  }

  &__subtitle {
    color: $subtitle;
    font-size: 12px;
    margin-top: 5px;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    font-size: 12px;
  }
}
</style>
      