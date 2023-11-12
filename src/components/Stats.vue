<script setup lang="ts">
</script>
<template>
  <section class="stats">
    <div class="card">
      <h2>Pb95</h2>
      <p>This is a statistics page.</p>
    </div>
    <div class="card">
      <h2>ON</h2>
      <p>This is a statistics page.</p>
    </div>
    <div class="card">
      <h2>LPG</h2>
      <p>This is a statistics page.</p>
    </div>
    <div class="card">
      <h2>V98</h2>
      <p>This is a statistics page.</p>
    </div>
    <div class="card">
      <h2>VON</h2>
      <p>This is a statistics page.</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

.stats {
  width: 25vw;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  .card {
    background-color: $primaryColor;
    background-image: url('./../assets/img/map.png');
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-blend-mode: luminosity;
    border-radius: 5vmin 0 5vmin 0;
    border: 2px solid $darkColor;
    padding: 2vmin;
    width: 45%;
    height: 30%;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);

    h2 {
      font-family: $fontDecorative;
      font-size: 3vmin;
      text-align: center;
      margin-bottom: 2vmin;
      padding-bottom: 1vmin;
      color: white;
      border-bottom: 2px solid white;
    }

    p {
      color: white;
    }
  }

}
</style>