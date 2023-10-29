<template>
  <ul class="sort">
    <li class="sort__item btn" v-for="(prod, idx) in getPizzaStore" :key="prod.id" @click="btnSort(prod)"
      :class="{ active: prod.btnActive }">
      {{ prod.name }}
    </li>
  </ul>
</template>

<script setup>
import { usePizza } from "@/stores/pizza";
import { computed, onMounted, ref } from "vue";
const pizzaStore = usePizza();
const getPizzaStore = computed(() => pizzaStore.products);

onMounted(() => {
  const activeIndex = localStorage.getItem('activeIndex');
  if (activeIndex !== null) {
    getPizzaStore.value.forEach((el, index) => {
      el.btnActive = index === Number(activeIndex);
    });
  }
});

const btnSort = (prod) => {
  getPizzaStore.value.forEach((el) => {
    el.btnActive = el === prod;
  });

  if (prod.category) {
    pizzaStore.card = pizzaStore.originalCard.filter(card => card.category === prod.category);
  } else {
    pizzaStore.card = pizzaStore.originalCard;
  }
  const activeIndex = getPizzaStore.value.findIndex((el) => el === prod);
  localStorage.setItem('activeIndex', activeIndex.toString());
};
</script>
