<template>
  <div class="category">
    <div class="category__wrapper btn" @click="toggleDropdown()">
      <img class="category__wrapper_img" :class="{ active: isDropdownOpen }" src="@/assets/img/sort__icon.svg" alt="" />
      Сортировка по:
      <span>{{ activeSort }}</span>
      <ul v-show="isDropdownOpen" class="category__wrapper-list">
        <li :class="{ active: sort.isActive }" v-for="sort in getPizzaStore" :key="sort.id" @click="
          btnSort(sort);
        toggleDropdown();
        ">
          {{ sort.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { usePizza } from "@/stores/pizza";
import { ref } from "vue";
const pizzaStore = usePizza();
const getPizzaStore = pizzaStore.sort;
const activeSort = ref("По пулярности");
const isDropdownOpen = ref(false);
const btnSort = (sort) => {
  getPizzaStore.forEach((el) => {
    el.isActive = false;
  });
  if (sort.name === "По пулярности") {
    pizzaStore.$state.category = "rating";
    pizzaStore.getPizza("rating");
  } else if (sort.name === "По цене") {
    pizzaStore.getPizza("price");
  } else if (sort.name === "По алфавиту") {
    pizzaStore.getPizza("title");
  }
  sort.isActive = true;
  activeSort.value = sort.name;
};
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>
