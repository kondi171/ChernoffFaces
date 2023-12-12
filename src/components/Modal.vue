<script setup lang="ts">

import { useAppStore } from '../stores/app';
import voivodeshipJSON from './../data/voivodeships.json';

const { modalVisible, voivodeship, closeModal } = defineProps(['modalVisible', 'voivodeship', 'closeModal']);
const appStore = useAppStore();
const { voivodeshipsStats, voivodeshipsData, year, index } = appStore;

const handleAddYear = () => {
  if (year.value < 2060) {
    index.value++;
    year.value++;
  }
}
const handleSubtractYear = () => {
  if (year.value > 2031) {
    index.value--;
    year.value--;
  }
}

</script>
<template>
  <div class="overlay" :class="{ activeOverlay: modalVisible }">
    <div v-if="modalVisible" class="modal" :class="{ activeModal: modalVisible }">
      <h2>{{ voivodeship.name }}</h2>
      <div class="data-wrapper">
        <div class="stats">
          <h3>Statystyki:</h3>
          <div class="demographic-data">
            <div class="row thead">
              <div class="cell info">Ikona</div>
              <div class="cell info">Dane</div>
              <div class="cell info">
                <span @click="handleSubtractYear">-</span>
                {{ year.value }}
                <span @click="handleAddYear">+</span>
              </div>
              <div class="cell info">Średnia</div>
              <div class="cell info">Mediana</div>
              <div class="cell info">Min</div>
              <div class="cell info">Maks</div>
            </div>
            <div class="row">
              <div class="cell data"><font-awesome-icon class="data-icon" icon="people-group" /></div>
              <div class="cell data">Populacja</div>
              <div class="cell">{{ voivodeshipJSON[voivodeship.id].population[index.value] }}</div>
              <div class="cell">{{ voivodeshipsStats.average[voivodeship.id].population }}</div>
              <div class="cell">{{ voivodeshipsStats.median[voivodeship.id].population }}</div>
              <div class="cell">{{ voivodeshipsStats.min[voivodeship.id].population }}</div>
              <div class="cell">{{ voivodeshipsStats.max[voivodeship.id].population }}</div>
            </div>
            <div class="row">
              <div class="cell data"><font-awesome-icon class="data-icon" icon="suitcase-rolling" /></div>
              <div class="cell data">Migracje Wewnętrzne</div>
              <div class="cell">{{ voivodeshipJSON[voivodeship.id].internalMigration[index.value] }}</div>
              <div class="cell">{{ voivodeshipsStats.average[voivodeship.id].internalMigration }}</div>
              <div class="cell">{{ voivodeshipsStats.median[voivodeship.id].internalMigration }}</div>
              <div class="cell">{{ voivodeshipsStats.min[voivodeship.id].internalMigration }}</div>
              <div class="cell">{{ voivodeshipsStats.max[voivodeship.id].internalMigration }}</div>
            </div>
            <div class="row">
              <div class="cell data"><font-awesome-icon class="data-icon" icon="cart-flatbed-suitcase" /></div>
              <div class="cell data">Migracje Zagraniczne</div>
              <div class="cell">{{ voivodeshipJSON[voivodeship.id].externalMigration[index.value] }}</div>
              <div class="cell">{{ voivodeshipsStats.average[voivodeship.id].externalMigration }}</div>
              <div class="cell">{{ voivodeshipsStats.median[voivodeship.id].externalMigration }}</div>
              <div class="cell">{{ voivodeshipsStats.min[voivodeship.id].externalMigration }}</div>
              <div class="cell">{{ voivodeshipsStats.max[voivodeship.id].externalMigration }}</div>
            </div>
            <div class="row">
              <div class="cell data"><font-awesome-icon class="data-icon" icon="baby-carriage" /></div>
              <div class="cell data">Urodzenia</div>
              <div class="cell">{{ voivodeshipJSON[voivodeship.id].births[index.value] }}</div>
              <div class="cell">{{ voivodeshipsStats.average[voivodeship.id].births }}</div>
              <div class="cell">{{ voivodeshipsStats.median[voivodeship.id].births }}</div>
              <div class="cell">{{ voivodeshipsStats.min[voivodeship.id].births }}</div>
              <div class="cell">{{ voivodeshipsStats.max[voivodeship.id].births }}</div>
            </div>
            <div class="row">
              <div class="cell data"><font-awesome-icon class="data-icon" icon="skull" /></div>
              <div class="cell data">Zgony</div>
              <div class="cell">{{ voivodeshipJSON[voivodeship.id].deaths[index.value] }}</div>
              <div class="cell">{{ voivodeshipsStats.average[voivodeship.id].deaths }}</div>
              <div class="cell">{{ voivodeshipsStats.median[voivodeship.id].deaths }}</div>
              <div class="cell">{{ voivodeshipsStats.min[voivodeship.id].deaths }}</div>
              <div class="cell">{{ voivodeshipsStats.max[voivodeship.id].deaths }}</div>
            </div>
          </div>
        </div>
        <div class="chernoff-face">
          <h3>Wygenerowana Twarz Chernoffa:</h3>
          <svg class="map" id="map" viewBox="0 0 1000 950" xmlns="http://www.w3.org/2000/svg">
            <path v-for="voivodeshipFace in voivodeshipsData"
              :class="{ 'activeVoivodeship': voivodeshipFace.name === voivodeship.name }" class="voivodeship"
              :key="voivodeshipFace.id" :d="voivodeshipFace.points">
            </path>
          </svg>
          <div class="face-container">
            <img v-if="voivodeshipsData[0].face.eyes" v-for="face in voivodeship.face" v-bind:src="face"
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
  z-index: 1;

  &.activeOverlay {
    transform: translateY(0);
    opacity: 1;
  }

  .modal {
    position: relative;
    width: 70%;
    height: 65vh;
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
      justify-content: space-between;

      h3 {
        text-align: center;
        display: block;
        padding: 2vmin;
        font-size: 3vmin;
        color: $primaryColor;
      }

      .stats {
        width: 70%;

        .demographic-data {

          .thead,
          .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .cell {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            color: $bgColor;
            text-align: center;
            height: 7vmin;
            border-radius: 5px;
            margin: 1px;
            font-size: 2vmin;

            &.data {
              color: $secondaryColor;
            }
          }

          .thead {
            font-weight: bold;
            background-color: black !important;
            font-size: 2.4vmin;
            border-radius: 5px;

            span {
              color: $bgColor;
              font-size: 4vmin;
              user-select: none;
              border-radius: 10px;
              margin: 1vmin;
              transition-duration: .4s;

              &:hover {
                cursor: pointer;
                color: $primaryColor;
                border-color: $primaryColor;
              }
            }

            .info {
              border-radius: 5px;
              color: $primaryColor;
              border: none;
              font-size: 2.5vmin;
            }
          }

          .row:nth-child(odd) {
            border-radius: 5px;
            background-color: darken($darkColor, 5%);
          }
        }
      }

      .chernoff-face {
        text-align: center;
        width: 45%;
        position: relative;

        .map {
          width: 80%;
          height: 80%;


          path {
            stroke: $primaryColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 4px;

            &.activeVoivodeship {
              fill: $primaryColor;
            }
          }
        }

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
}
</style>
