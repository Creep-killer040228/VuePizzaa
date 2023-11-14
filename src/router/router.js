import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../views/HomeView/HomeView.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/basketview",
      name: "basketview",
      component: () => import("@/views/BasketView/BasketView.vue"),
    },
  ],
});
