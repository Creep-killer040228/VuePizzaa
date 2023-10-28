<template>
  <div class="pizza">
    <span>Все пиццы</span>
    <div class="pizza__grid">
      <PizzaCard v-for="card in paginationCard" :key="card" :card="card" />
    </div>
    <div class="pizza__pagination">
      <div v-for="page in pages" :key="page.id" @click="pageClick(page)" :class="{ pageActive: page === pageCardNumber }">
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script setup>
import PizzaCard from "./PizzaCard.vue";
import { onMounted, computed, ref } from "vue";
import { usePizza } from "@/stores/pizza";
const storePizza = usePizza();
onMounted(() => {
  storePizza.getPizza();
});
const pages = computed(() => {
  return Math.ceil(storePizza.card.length / 3)
})
const pageCard = ref(3)
const pageCardNumber = ref(1)
const paginationCard = computed(() => {
  let from = (pageCardNumber.value - 1) * pageCard.value;
  let to = from + pageCard.value;
  return storePizza.card.slice(from, to);
});
const pageClick = (page) => {
  pageCardNumber.value = page
}

</script>
