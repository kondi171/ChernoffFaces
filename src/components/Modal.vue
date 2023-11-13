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
      <div class="flex-wrapper">
        <ul>
          <li>
            <font-awesome-icon class="data-icon" icon="people-group" />
            Popuacja: <strong>{{ voivodeship.population }}</strong>
          </li>
          <li>
            <font-awesome-icon class="data-icon" icon="suitcase-rolling" />
            Migracja: <strong>{{ voivodeship.migration }}</strong>
          </li>
          <li>
            <font-awesome-icon class="data-icon" icon="baby-carriage" />
            Małżeństwa: <strong>{{ voivodeship.marriages }}</strong>
          </li>
          <li>
            <font-awesome-icon class="data-icon" icon="person-arrow-up-from-line" />
            Urodzenia: <strong>{{ voivodeship.born }}</strong>
          </li>
          <li>
            <font-awesome-icon class="data-icon" icon="skull" />
            Zgony: <strong>{{ voivodeship.deaths }}</strong>
          </li>
        </ul>
        <div class="chernoffFace">
          <h3>Wygenerowana Twarz Chernoffa</h3>
          <img src="./../assets/img/map.png" alt="Chernoff Faces">
        </div>
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
    width: 60%;
    height: 60vh;
    background-color: $darkColor;
    border-radius: 5vmin 0 5vmin 0;
    border: 2px solid $darkColor;
    padding: 2vmin;
    transform: scale(0);
    opacity: 0;

    h2 {
      font-size: 6vmin;
      font-family: $fontDecorative;
      color: $secondaryColor;
      text-shadow: 1px 1px 1px $darkColor;
      text-align: center;
      border-bottom: 2px solid $secondaryColor;
    }

    &.activeModal {
      transform: scale(1);
      opacity: 1;
    }

    .flex-wrapper {
      display: flex;
      // flex-direction: column;
      justify-content: space-between;

      ul {
        list-style-type: none;
        color: $bgColor;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 4vmin;
        width: 50%;

        li {
          font-size: 3.5vmin;
          font-weight: 600;
          padding: 1vmin;
          margin: 1vmin;
          display: flex;
          justify-content: space-between;
          width: 80%;
          border-bottom: 2px solid $secondaryColor;
          color: $secondaryColor;
          border-radius: 1vmin;

          &:nth-of-type(odd) {
            background-color: lighten($darkColor, 10%);

          }

          strong {
            color: $bgColor;
          }

          .data-icon {
            font-size: 4vmin;
            margin: 0 1vmin;
            color: $bgColor;
          }
        }
      }

      .chernoffFace {
        text-align: center;
        margin-top: 4vmin;
        background-color: #fff;

        h3 {
          color: $bgColor;
          font-weight: bold;
        }

        img {
          width: 10%;
          height: 10%;
        }
      }

    }


    .icon {
      font-size: 2.5vmin;
      font-weight: bold;
      position: absolute;
      right: -1vmin;
      top: -2vmin;
      width: 30px;
      height: 30px;
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