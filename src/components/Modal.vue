<script setup lang="ts">

import { useAppStore } from '../stores/app';

const { modalVisible, voivodeship, closeModal } = defineProps(['modalVisible', 'voivodeship', 'closeModal']);
const appStore = useAppStore();
const { voivodeFaces } = appStore;

</script>
<template>
  <div class="overlay" :class="{ activeOverlay: modalVisible }">
    <div v-if="modalVisible" class="modal" :class="{ activeModal: modalVisible }">
      <h2>{{ voivodeship.name }}</h2>
      <div class="data-wrapper">
        <div class="demographic-data">
          <h3>Dane Demograficzne:</h3>
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
              <font-awesome-icon class="data-icon" icon="children" />
              Małżeństwa: <strong>{{ voivodeship.marriages }}</strong>
            </li>
            <li>
              <font-awesome-icon class="data-icon" icon="baby-carriage" />
              Urodzenia: <strong>{{ voivodeship.born }}</strong>
            </li>
            <li>
              <font-awesome-icon class="data-icon" icon="skull" />
              Zgony: <strong>{{ voivodeship.deaths }}</strong>
            </li>
          </ul>
        </div>

        <div class="chernoff-face">
          <h3>Wygenerowana Twarz Chernoffa:</h3>
          <svg class="map" id="map" viewBox="0 0 1000 950" xmlns="http://www.w3.org/2000/svg">
            <path v-for="voivodeshipFace in voivodeFaces"
              :class="{ 'activeVoivodeship': voivodeshipFace.name === voivodeship.name }" class="voivodeship"
              :key="voivodeshipFace.id" :d="voivodeshipFace.points">
            </path>
          </svg>
          <div class="face-container">
            <img v-if="voivodeFaces[0].face.eyes" v-for="face in voivodeship.face" v-bind:src="face"
              :data-symbol="voivodeship.symbol" alt="">
            <div v-else class="not-generated">
              Twarze Chernoffa nie zostały jeszcze wygenerowane!
            </div>
          </div>
        </div>
      </div>
      <font-awesome-icon v-on:click="closeModal" icon="fa-solid fa-x" class="icon" />
    </div>
  </div>
</template>
<!--<div v-if="voivodeFaces?.face" class="img-container">
       <img src="./../assets/img/map.png" alt="Chernoff Faces">
      </div>
      <div v-else class="not-generated">
        Twarze Chernoffa nie zostały jeszcze wygenerowane!
    </div>  -->
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

    .data-wrapper {
      display: flex;
      justify-content: space-evenly;

      h3 {
        text-align: center;
        display: block;
        padding: 2vmin;
        font-size: 3vmin;
        color: $primaryColor;
      }

      .demographic-data {
        width: 50%;

        ul {
          list-style-type: none;
          color: $bgColor;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          li {
            font-size: 3.5vmin;
            font-weight: 600;
            padding: 1vmin;
            margin: 1vmin;
            display: flex;
            justify-content: space-between;
            width: 100%;
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
      }

      .chernoff-face {
        text-align: center;
        width: 45%;
        position: relative;

        .face-container {
          position: absolute;
          top: 40%;
          left: 40%;

          .not-generated {
            color: red;
            font-size: 2vmin;
            font-weight: bold;
            background-color: $darkColor;
            padding: 1vmin;
            text-align: center;
            border-radius: 1vmin;
            margin-left: -35%;
            width: 100%;
          }

          img {
            position: absolute;
            transform: scale(1.4);
          }
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
      width: 80%;
      height: 80%;


      path {
        // fill: $primaryColor;
        // stroke: $secondaryColor;
        stroke: $primaryColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 4px;

        &.activeVoivodeship {
          fill: $primaryColor;
        }
      }
    }
  }
}
</style>
