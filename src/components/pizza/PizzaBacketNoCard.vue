<template>
  <div class="basket__empty">
    <h3>Корзина пустая <img src="../../assets/img/basket__empty_icon.svg" alt=""></h3>
    <p>Вероятней всего, вы не заказывали ещё пиццу.
      Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
    <img src="@/assets/img/basket__empty.png" alt="" />
    <RouterLink to="/" class="basket__empty-btn btn">Вернуться назад</RouterLink>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
