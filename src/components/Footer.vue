<script setup lang="ts">
</script>
<template>
  <footer> Chernoff Faces &copy; 2023</footer>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $darkColor;
  border-top: 2px solid $primaryColor;
  box-shadow: 0 0 2vmin 1vmin #000;
  color: $primaryColor;
  font-family: $fontDecorative;
  letter-spacing: 2px;
  filter: drop-shadow(0 0 2vmin $primaryColor);
  text-align: center;
  height: 5vmin;
}
</style>