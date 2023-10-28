<template>
  <header class="header">
    <RouterLink to="/" class="header__nav">
      <img src="@/assets/img/logo.svg" alt="" />
      <div class="header__nav_title">
        <h1>VUE PIZZA</h1>
        <p>Cамая вкусная пицца во вселенной</p>
      </div>
    </RouterLink>
    <RouterLink to="/basketview" class="header__basket">
      <h3>{{ priceTotal }} ₽</h3>
      <div class="line"></div>
      <p>
        <img src="@/assets/img/basket_icon.svg" alt="" />
        {{ amounts }}
      </p>
    </RouterLink>
  </header>
  <div class="lines"></div>
</template>

<script setup>
import { computed } from "vue";
import { usePizza } from "@/stores/pizza.js";
const cardBasketStore = usePizza();
const amounts = computed(() => cardBasketStore.amountTotal);
const priceTotal = computed(() => cardBasketStore.priceTotal);
</script>
