<script setup lang="ts">
import { defineProps } from 'vue';
import { DataParts } from '../../ts/enums';
const { title, name, img, data, part, handleExpandData } = defineProps(['title', 'name', 'img', 'data', 'part', 'handleExpandData']);

</script>
<template>
  <div class="data">
    <h3>{{ title }} - {{ name }}</h3>
    <div :data-id="part" v-on:click="() => handleExpandData(DataParts.POPULATION)" class="clickInfo">
      <!-- <div :data-id="part" class="clickInfo"> -->
      <span>Kliknij aby rozwinąć!</span>
      <font-awesome-icon class="data-icon" icon="angles-down" />
    </div>
    <div :data-id="part" class="cardWrapper">
      <div class="card">
        <img :src="img[0]" alt="">
        <span> &le; {{ data[0] }}</span>
      </div>
      <div class="card">
        <img :src="img[1]" alt="">
        <span>&le; {{ data[1] }}</span>
      </div>
      <div class="card">
        <img :src="img[2]" alt="">
        <span>&gt; {{ data[1] }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './../../assets/scss/variables.scss';

.data {
  width: 100%;
  background-color: $primaryColor;
  padding-bottom: 1vmin;
  border: .4vmin solid $darkColor;

  h3 {
    text-align: center;
    color: $primaryColor;
    background-color: $darkColor;
    padding: 1vmin;
    font-size: 3vmin;
    width: 100%;
    border-radius: .2vmin;
  }

  .cardWrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 1vmin;
    display: none;

    &.expanded {
      display: flex;
    }

    .card {
      display: flex;
      flex-direction: column;
      flex-basis: 30%;

      background-color: $secondaryColor;
      border-radius: 1vmin;
      border: .3vmin solid $darkColor;

      span {
        text-align: center;
        font-size: 2vmin;
        padding: 1vmin;
        background-color: $darkColor;
        color: $bgColor;
      }
    }
  }

  &.disabled {
    color: red;
  }

  .clickInfo {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 1vmin;
    color: $bgColor;
    transition-duration: .4s;
    font-size: 2vmin;

    &:hover {
      color: $secondaryColor;
      letter-spacing: 2px;
      cursor: pointer;
    }

    &.clicked {
      display: none;
    }
  }

}
</style>