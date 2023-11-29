<script setup lang="ts">
</script>
<template>
  <header>
    <h1>Statystyka Danych Demograficznych - Prognoza na lata 2031-2060</h1>
    <p>Aktualizacja danych: 23.11.2023</p>
  </header>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

header {
  background-color: $darkColor;
  background-image: url('./../assets/img/zwartevilt.webp');
  border-bottom: 1px solid $primaryColor;
  box-shadow: 0 0 2vmin 1vmin $darkColor;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: $primaryColor;
    padding: 1vmin;
    margin-left: 3vmin;
    font-size: 4vmin;
    font-family: $fontDecorative;
    letter-spacing: 2px;
  }

  p {
    color: $bgColor;
    margin-right: 3vmin;
  }
}
</style>