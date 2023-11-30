<script setup lang="ts">
import { ref } from 'vue';
import polandData from './../data/poland.json';
const index = ref(0);
const year = ref(2031);

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
  <section class="stats">

    <div class="card">
      <h2>Migracje Wewnętrzne</h2>
      <div class="flex">
        <p>Migracje Wewnętrzne w Polsce zawsze wynosić będą <strong>{{ polandData.internalMigration[index] }}</strong>
          osób.</p>
      </div>
    </div>
    <div class="card">
      <h2>Migracje Zagraniczne</h2>
      <div class="flex">
        <p>Migracje Zagraniczne w Polsce na wybrany rok prognozowane są na <strong>{{
          polandData.externalMigration[index]
        }}</strong> osób.</p>
      </div>
    </div>
    <div class="card">
      <h2>Urodzenia</h2>
      <div class="flex">
        <p>W wybranym roku w Polsce przyjdzie na świat około <strong>{{ polandData.born[index] }}</strong> dzieci.</p>
      </div>
    </div>
    <div class="card">
      <h2>Zgony</h2>
      <div class="flex">
        <p>W Polsce na dany rok odnotuje się około <strong>{{ polandData.deaths[index] }}</strong> zgonów.</p>
      </div>
    </div>
    <div class="card">
      <h2>Populacja</h2>
      <div class="flex">
        <p>W Polsce populacja na podany rok prognozowna jest na <strong>{{ polandData.population[index] }} </strong> osób.
        </p>
      </div>
    </div>
    <div class="controller">
      <div class="btns">
        <span>{{ year }}</span> <br />
        <button v-on:click="handleSubtractYear">-</button> <button v-on:click="handleAddYear">+</button>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import './../assets/scss/variables.scss';

.stats {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;

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
      font-size: 2.5vmin;
      text-align: center;
      margin-bottom: .5vmin;
      padding-bottom: .5vmin;
      margin-top: -1vmin;
      color: white;
      border-bottom: 2px solid white;
    }

    .flex {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 75%;
      // background-color: red;

      p {
        color: $bgColor;
        text-align: center;
        font-size: 1.8vmin;
        text-shadow: 1px 1px 0 $darkColor;

        strong {
          color: $secondaryColor;
          font-size: 2.2vmin;
        }
      }
    }


  }

  .controller {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-image: none;
    width: 45%;
    height: 30%;

    .btns {
      button {
        width: 7vmin;
        height: 7vmin;
        font-size: 6vmin;
        background-color: $darkColor;
        border: 2px solid lighten($darkColor, 10%);
        border-radius: 1vmin;
        color: $bgColor;
        transition-duration: .4s;

        &:hover {
          cursor: pointer;
          background-color: $primaryColor;
          transform: scale(1.1);
        }
      }

      span {
        color: $darkColor;
        font-size: 8vmin;
        font-weight: bold;
      }
    }
  }
}
</style>