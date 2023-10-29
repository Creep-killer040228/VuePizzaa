<template>
  <div class="home container">
    <Header />
    <div class="sort__wrapper">
      <SortProduct />
      <SortCategory />
    </div>
    <Pizzalist />
  </div>
</template>

<script setup>
import Pizzalist from "@/components/pizza/Pizzalist.vue";
import SortCategory from "@/components/sort/SortCategory.vue";
import SortProduct from "@/components/sort/SortProduct.vue";
import Header from "@/components/header/Header.vue";
</script>

