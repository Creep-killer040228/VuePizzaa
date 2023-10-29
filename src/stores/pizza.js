import { defineStore } from "pinia";
import axios from "axios";

export const usePizza = defineStore({
  id: "pizza",
  state: () => ({
    amounts: 0,
    card: [],
    originalCard: [],
    cardBasket: JSON.parse(localStorage.getItem("cardBasket")) || [],
    category: "",
    products: [
      { category: 0, name: "Все", btnActive: true },
      { category: 1, name: "Мясные", btnActive: true },
      { category: 2, name: "Вегетарианская", btnActive: true },
      { category: 3, name: "Гриль", btnActive: true },
      { category: 4, name: "Острые", btnActive: true },
      { category: 5, name: "Закрытые", btnActive: true },
    ],
    sort: [
      { id: 1, name: "По пулярности", isActive: true },
      { id: 2, name: "По цене", isActive: false },
      { id: 3, name: "По алфавиту", isActive: false },
    ],
  }),
  getters: {
    priceTotal() {
      return this.cardBasket.reduce((total, card) => total + card.total, 0);
    },
    amountTotal() {
      return this.cardBasket.reduce((total, card) => total + card.amount, 0);
    },

  },
  actions: {
    async getPizza(category) {
      try {
        const res = await axios.get(
          category
            ? `https://64de99a3825d19d9bfb2bcac.mockapi.io/vue-pizza?sortBy=${category}&order=desc`
            : "https://64de99a3825d19d9bfb2bcac.mockapi.io/vue-pizza"
        );
        res.data.forEach((el) => {
          el.amount = 0;
          el.total = 0;
        });
        this.card = res.data;
        this.originalCard = res.data;
      } catch (error) {
        console.error("Произошла ошибка", error);
      }
    },
    addCard(card) {
      const foundCard = this.cardBasket.find((item) => item.id === card.id);
      if (foundCard) {
        foundCard.amount += 1;
        foundCard.total += card.price;
      } else {
        card.amount = 1;
        card.total = card.price;
        this.cardBasket.push(card);
      }
      this.amounts++;
      this.saveCardBasket();
    },
    deleteCard(id) {
      const cardIndex = this.cardBasket.findIndex((item) => item.id === id);
      if (cardIndex !== -1) {
        this.cardBasket.splice(cardIndex, 1);
        this.saveCardBasket();
      }
    },
    deleteAll() {
      this.cardBasket = [];
      this.saveCardBasket();
    },
    incrementItem(id) {
      const increment = this.cardBasket.find((item) => item.id === id);
      if (increment) {
        increment.amount += 1;
        increment.total += increment.price;
        this.saveCardBasket();
      }
    },
    decrementItem(id) {
      const cardIndex = this.cardBasket.findIndex((item) => item.id === id);
      const decrement = this.cardBasket.find((item) => item.id === id);
      if (decrement && decrement.amount >= 1) {
        decrement.amount -= 1;
        decrement.total -= decrement.price;
        this.saveCardBasket();
      }
      if (decrement.amount === 0) {
        this.cardBasket.splice(cardIndex, 1);
        this.saveCardBasket();
      }
    },
    saveCardBasket() {
      localStorage.setItem("cardBasket", JSON.stringify(this.cardBasket));
    },
  },
});