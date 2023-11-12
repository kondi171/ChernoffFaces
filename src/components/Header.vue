<script setup lang="ts">
</script>
<template>
  <header>
    <h1>Chernoff's Faces</h1>
  </header>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

header {
  background-color: $darkColor;
  border-bottom: 2px solid $primaryColor;
  box-shadow: 0 0 2vmin 1vmin $darkColor;
  height: 10vh;

  h1 {
    color: $primaryColor;
    padding: 1vmin;
    padding-left: 3vmin;
    font-size: 3vmax;
    font-family: $fontDecorative;
    letter-spacing: 2px;
    // filter: drop-shadow(0 0 2vmin $primaryColor);
  }
}
</style>