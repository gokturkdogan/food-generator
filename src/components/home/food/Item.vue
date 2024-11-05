<template>
  <div class="categoryItem">
    <img
      class="categoryItem__image"
      src="https://res.cloudinary.com/doar0vpnc/image/upload/v1730810469/category-photos/hamburger.png"
      alt="category"
    />
    <div class="categoryItem__title">Pizzalar</div>
    <div class="categoryItem__subtitle">Rasgele pizza</div>
    <div class="categoryItem__actions">
      <span class="categoryItem__actionText">Zar atmak için tıkla</span>
      <span class="categoryItem__actionButton"><CategoryItemDiceIcon /></span>
    </div>
  </div>
</template>
        
<script>
import CategoryItemDiceIcon from "../../../assets/images/icons/category-item-dice-icon.vue";
export default {
  name: "FoodItem",
  components: {
    CategoryItemDiceIcon,
  },
};
</script>
      