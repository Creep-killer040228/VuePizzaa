<template>
  <div class="card">
    <img :src="card.imageUrl" alt="" />
    <h3>{{ card.title }}</h3>
    <div class="card__categoru">
      <div class="card__categoru-title btn">
        <button v-for="types in card.types" :key="types">
          {{ card.types == 0 ? "тонкое" : "традиционное" }}
        </button>
      </div>
      <div class="card__categoru-sub">
        <button v-for="sizes in card.sizes">{{ sizes }}см</button>
      </div>
    </div>
    <div class="card__buy ">
      <span>от {{ card.price }} ₽</span>
      <button class="btn" @click="addToBasket(card)">
        Добавить
        <span>{{ card.amount }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { usePizza } from "@/stores/pizza.js";
const cardBasketStore = usePizza();
const addToBasket = (card) => {
  cardBasketStore.addCard(card);
};
const props = defineProps({
  card: Object,
});
</script>
