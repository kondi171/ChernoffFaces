<script setup lang="ts">
</script>
<template>
  <footer>
    <h3>Konrad Nowak</h3>
    <h3>Chernoff Faces &copy; 2023</h3>
    <h3>Patryk Kaczmarski</h3>
  </footer>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

footer {
  background-image: url('./../assets/img/zwartevilt.webp');
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 100% 100%, 0 100%, 0% 60%, 10% 20%);
  height: 7vmin;
  padding: 2vmin;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: $darkColor;
  color: $primaryColor;
  font-family: $fontDecorative;
  letter-spacing: 2px;
  text-align: center;

  h3 {
    font-size: 2.5vmin;

    &:nth-of-type(even) {
      color: $secondaryColor;
    }
  }
}
</style>