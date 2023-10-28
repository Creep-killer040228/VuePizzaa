<template>
  <div class="app">
    <BasketHeader />
    <div class="card_basket" v-if="cardBasketStore.length">
      <PizzaBacket />
      <PizzaBacketCard v-for="cardBasket in cardBasketStore" :key="cardBasket" :cardBasket="cardBasket" />
    </div>
    <PizzaBacketNoCard v-else />
  </div>
</template>

<script setup>
import BasketHeader from "@/components/header/BasketHeader.vue";
import PizzaBacketNoCard from "@/components/pizza/PizzaBacketNoCard.vue";
import PizzaBacketCard from "@/components/pizza/PizzaBacketCard.vue";
import PizzaBacket from "@/components/pizza/PizzaBacket.vue";
import { computed } from "vue";
import { usePizza } from "@/stores/pizza.js";
const cardStore = usePizza();
const cardBasketStore = computed(() => cardStore.cardBasket);
</script>
