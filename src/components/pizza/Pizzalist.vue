<template>
  <div class="pizza">
    <span>Все пиццы</span>
    <div class="pizza__grid">
      <PizzaCard v-for="card in storePizza.card" :key="card" :card="card" />
    </div>
  </div>
</template>

<script setup>
import PizzaCard from "./PizzaCard.vue";
import { onMounted } from "vue";
import { usePizza } from "@/stores/pizza";
const storePizza = usePizza();
onMounted(() => {
  storePizza.getPizza();
});
</script>
