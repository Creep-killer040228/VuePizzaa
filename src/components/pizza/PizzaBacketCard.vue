<template>
  <div class="card__basket">
    <span>
      <img class="card__basket-img" :src="cardBasket.imageUrl" alt="" />
      <div class="desc">
        <h3>{{ cardBasket.title }}</h3>
        <p>тонкое тесто, 26 см.</p>
      </div>
    </span>
    <div class="card__basket-btn ">
      <button class="btn" @click="decrementItem(cardBasket.id)">
        <img src="@/assets/img/minus.svg" alt="" />
      </button>
      {{ cardBasket.amount }}
      <button class="btn" @click="incrementItem(cardBasket.id)">
        <img src="@/assets/img/plus.png" alt="" />
      </button>
    </div>
    {{ cardBasket.total }} ₽
    <img src="@/assets/img/clear_backet.svg" alt="" class="btn" @click="deleteCard(cardBasket.id)" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { usePizza } from "@/stores/pizza.js";
const cardBasketStore = usePizza();
const deleteCard = (id) => cardBasketStore.deleteCard(id);
const decrementItem = (id) => cardBasketStore.decrementItem(id);
const incrementItem = (id) => cardBasketStore.incrementItem(id);
const props = defineProps({
  cardBasket: Object,
  ind: Number,
});
</script>