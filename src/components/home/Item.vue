<template>
  <div class="categoryItem">
    <img
      class="categoryItem__image"
      :src="category.image"
      alt="category"
    />
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
      