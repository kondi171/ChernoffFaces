<script setup lang="ts">
</script>
<template>
  <section class="stats">
    <div class="card">
      <h2>Populacja</h2>
      <p>Wygeneruj twarze, aby zobaczyć szczegóły</p>
    </div>
    <div class="card">
      <h2>Migracja</h2>
      <p>Wygeneruj twarze, aby zobaczyć szczegóły</p>
    </div>
    <div class="card">
      <h2>Małżeństwa</h2>
      <p>Wygeneruj twarze, aby zobaczyć szczegóły</p>
    </div>
    <div class="card">
      <h2>Urodzenia</h2>
      <p>Wygeneruj twarze, aby zobaczyć szczegóły</p>
    </div>
    <div class="card">
      <h2>Zgony</h2>
      <p>Wygeneruj twarze, aby zobaczyć szczegóły</p>
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
      color: $bgColor;
      text-align: center;
    }
  }

}
</style>