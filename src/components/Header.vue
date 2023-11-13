<script setup lang="ts">
</script>
<template>
  <header>
    <h1>Twarze Chernoffa</h1>
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
}


h1 {
  color: $primaryColor;
  padding: 1vmin;
  margin-left: 3vmin;
  font-size: 5vmin;
  font-family: $fontDecorative;
  letter-spacing: 2px;
}
</style>