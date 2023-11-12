<script setup lang="ts">
import voivodeshipsData from './../data/voivodeships.json';

</script>

<template>
  <section>
    <div class="map-wrapper">
      <svg class="map" id="map" viewBox="0 0 1000 950" xmlns="http://www.w3.org/2000/svg">
        <path class="voivodeship" v-for="voivodeship in voivodeshipsData" :d="voivodeship.points" :id="voivodeship.id"
          :name="voivodeship.name"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

section {
  width: 50vw;
  display: flex;
  justify-content: center;

  .map-wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 700px;
    height: 700px;
    display: block;

    .map {
      width: 100%;
      height: 100%;
      fill: $darkColor;
      stroke: $secondaryColor;
      // stroke: $primaryColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 4px;
    }

    .voivodeship {
      position: relative;
      transition-duration: .4s;

      &:hover {
        fill: $secondaryColor;
        // fill: $primaryColor;
        cursor: pointer;
      }
    }

  }
}
</style>