<script setup lang="ts">

import polandData from './../data/poland.json';
import Card from './reusable/Card.vue';

import { useAppStore } from '../stores/app';

const { year, index } = useAppStore();
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
    <Card title="Migracje Wewnętrzne" content="Migracje Wewnętrzne w Polsce zawsze wynosić będą"
      :data="polandData.internalMigration[index.value]" />
    <Card title="Migracje Zagraniczne" content="Migracje Zagraniczne w Polsce na wybrany rok prognozowane są na"
      :data="polandData.externalMigration[index.value]" />
    <Card title="Urodzenia" content="W wybranym roku w Polsce przyjdzie na świat około"
      :data="polandData.births[index.value]" />
    <Card title="Zgony" content="W Polsce na dany rok odnotuje się około" :data="polandData.deaths[index.value]" />
    <Card title="Populacja" content="W Polsce populacja na podany rok prognozowna jest na "
      :data="polandData.population[index.value]" />
    <div class="controller">
      <div class="btns">
        <span>{{ year.value }}</span> <br />
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