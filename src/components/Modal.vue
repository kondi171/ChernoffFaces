<script setup lang="ts">

const { modalVisible, voivodeship, closeModal } = defineProps(['modalVisible', 'voivodeship', 'closeModal']);



</script>
<template>
  <div class="overlay" :class="{ activeOverlay: modalVisible }">
    <div v-if="modalVisible" class="modal" :class="{ activeModal: modalVisible }">
      <h2>{{ voivodeship.name }}</h2>
      <!-- <svg class="map" id="map" viewBox="0 0 1000 350" xmlns="http://www.w3.org/2000/svg"> -->
      <!-- <path class="voivodeship" v-bind:d="voivodeship.points" v-bind:id="voivodeship.id" -->
      <!-- transform="translate(50%, 50%)"> -->
      <!-- </path> -->
      <!-- </svg> -->
      <ul>
        <li>Popuacja: <strong>{{ voivodeship.chernoffData.population }}</strong></li>
        <li>Migracja: <strong>{{ voivodeship.chernoffData.migration }}</strong></li>
        <li>Małżeństwa: <strong>{{ voivodeship.chernoffData.marriages }}</strong></li>
        <li>Urodzenia: <strong>{{ voivodeship.chernoffData.born }}</strong></li>
        <li>Zgony: <strong>{{ voivodeship.chernoffData.deaths }}</strong></li>
      </ul>
      <div class="chernoffFace">
        <img src="./../assets/img/map.png" alt="Chernoff Faces">
        <h3>Generated Chernoff Face</h3>
      </div>
      <font-awesome-icon v-on:click="closeModal" icon="fa-solid fa-x" class="icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  transition-duration: 0.4s;
  opacity: 0;
  transform: translateY(100vmin);

  &.activeOverlay {
    transform: translateY(0);
    opacity: 1;
  }

  .modal {
    position: relative;
    width: 35%;
    height: 40vh;
    background-color: $primaryColor;
    border-radius: 5vmin 0 5vmin 0;
    border: 2px solid $darkColor;
    padding: 2vmin;
    box-shadow: 8px 8px 24px 0px $darkColor;
    transform: scale(0);
    opacity: 0;

    h2 {
      font-size: 4vmin;
      font-family: $fontDecorative;
      color: $secondaryColor;
      text-shadow: 1px 1px 1px $darkColor;
    }

    &.activeModal {
      transform: scale(1);
      opacity: 1;
    }

    ul {
      list-style-type: none;
      color: $bgColor;

      li {
        margin: 1vmin;
        font-size: 2vmin;
      }
    }

    .chernoffFace {
      text-align: center;
      margin-top: 4vmin;

      h3 {
        color: $darkColor;
        font-weight: bold;
      }

      img {
        width: 10%;
        height: 10%;
      }
    }

    .icon {
      font-size: 2.5vmin;
      font-weight: bold;
      position: absolute;
      right: -1vmin;
      top: -2vmin;
      color: $secondaryColor;
      background-color: $darkColor;
      border-radius: 50%;
      padding: 1vmin;
      border: 2px solid $secondaryColor;
      transition-duration: .4s;

      &:hover {
        cursor: pointer;
        color: $darkColor;
        background-color: $secondaryColor;
      }
    }

    .map {
      position: absolute;
      top: -10vmin;
      left: 15%;
      background-color: #fff;

      path {
        fill: $darkColor;
        stroke: $secondaryColor;
        // stroke: $primaryColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 4px;
      }
    }
  }
}
</style>