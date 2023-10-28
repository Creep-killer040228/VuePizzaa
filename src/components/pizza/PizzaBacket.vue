<template>
  <div class="pizza__basket">
    <div class="pizza__basket_title">
      <span>
        <img src="@/assets/img/basket_black.svg" alt="" />
        Корзина
      </span>
      <button @click="pizzaStore.deleteAll()" class="pizza__basket_title-clear btn">
        <img src="@/assets/img/clear__btn.svg" alt="" />
        Очистить корзину
      </button>
    </div>
    <div class="line_basket"></div>
  </div>
</template>

<script setup>
import { usePizza } from "@/stores/pizza.js";
const pizzaStore = usePizza();
</script>
