<script setup lang="ts">
import eyes1 from './../assets/img/faces/eyes1.png';
import eyes2 from './../assets/img/faces/eyes2.png';
import eyes3 from './../assets/img/faces/eyes3.png';

import mouth1 from './../assets/img/faces/mouth1.png';
import mouth2 from './../assets/img/faces/mouth2.png';
import mouth3 from './../assets/img/faces/mouth3.png';

import nose1 from './../assets/img/faces/nose1.png';
import nose2 from './../assets/img/faces/nose2.png';
import nose3 from './../assets/img/faces/nose3.png';

import hair1 from './../assets/img/faces/hair1.png';
import hair2 from './../assets/img/faces/hair2.png';
import hair3 from './../assets/img/faces/hair3.png';

import head1 from './../assets/img/faces/head1.png';
import head2 from './../assets/img/faces/head2.png';
import head3 from './../assets/img/faces/head3.png';
import { DataParts } from '../ts/enums';
import { useAppStore } from '../stores/app';


const appStore = useAppStore();
const { chernoffFace, polandCompartments } = appStore;

const handleExpandData = (id: DataParts) => {
  const cards = document.querySelectorAll('.clickInfo + .cardWrapper');
  const clickedInfos = document.querySelectorAll('.clickInfo');
  clickedInfos.forEach(info => info.classList.remove('clicked'));
  cards.forEach(card => card.classList.remove('expanded'));

  const clickedCard = document.querySelector(`.cardWrapper[data-id="${id}"]`);
  const clickedInfo = document.querySelector(`.clickInfo[data-id="${id}"]`);
  if (clickedCard) {
    clickedCard.classList.add('expanded');
    clickedInfo?.classList.add('clicked');
  }
};

</script>
<template>
  <section class="legend">
    <div class="data">
      <h3>{{ chernoffFace.eyes }} - Oczy</h3>
      <div :data-id="DataParts.POPULATION" v-on:click="() => handleExpandData(DataParts.POPULATION)" class="clickInfo">
        <span>Kliknij aby rozwinąć!</span>
        <font-awesome-icon class="data-icon" icon="angles-down" />
      </div>
      <div :data-id="DataParts.POPULATION" class="cardWrapper">
        <div class="card">
          <img :src="eyes1" alt="">
          <span> &le; {{ polandCompartments.eyes.first }}</span>
        </div>
        <div class="card">
          <img :src="eyes2" alt="">
          <span>&le; {{ polandCompartments.eyes.second }}</span>
        </div>
        <div class="card">
          <img :src="eyes3" alt="">
          <span>&gt; {{ polandCompartments.eyes.second }}</span>
        </div>
      </div>
    </div>
    <div class="data">
      <h3>{{ chernoffFace.mouth }} - Usta</h3>
      <div :data-id="DataParts.INTERNAL_MIGRATION" v-on:click="() => handleExpandData(DataParts.INTERNAL_MIGRATION)"
        class="clickInfo">
        <span>Kliknij aby rozwinąć!</span>
        <font-awesome-icon class="data-icon" icon="angles-down" />
      </div>
      <div :data-id="DataParts.INTERNAL_MIGRATION" class="cardWrapper">
        <div class="card">
          <img :src="mouth1" alt="">
          <span> &le; -703</span>
          <!-- <span> &le; {{ polandCompartments.mouth.first }}</span> -->
        </div>
        <div class="card">
          <img :src="mouth2" alt="">
          <span>&le; 1405</span>
          <!-- <span>&le; {{ polandCompartments.mouth.second }}</span> -->
        </div>
        <div class="card">
          <img :src="mouth3" alt="">
          <span>&gt; 1405</span>
          <!-- <span>&gt; {{ polandCompartments.mouth.second }}</span> -->
        </div>
      </div>
    </div>
    <div class="data">
      <h3>{{ chernoffFace.nose }} - Nos</h3>
      <div :data-id="DataParts.EXTERNAL_MIGRATION" v-on:click="() => handleExpandData(DataParts.EXTERNAL_MIGRATION)"
        class="clickInfo">
        <span>Kliknij aby rozwinąć!</span>
        <font-awesome-icon class="data-icon" icon="angles-down" />
      </div>
      <div :data-id="DataParts.EXTERNAL_MIGRATION" class="cardWrapper">
        <div class="card">
          <img :src="nose1" alt="">
          <span> &le; {{ polandCompartments.nose.first }}</span>
        </div>
        <div class="card">
          <img :src="nose2" alt="">
          <span>&le; {{ polandCompartments.nose.second }}</span>
        </div>
        <div class="card">
          <img :src="nose3" alt="">
          <span>&gt; {{ polandCompartments.nose.second }}</span>
        </div>
      </div>
    </div>
    <div class="data">
      <h3>{{ chernoffFace.hair }} - Włosy</h3>
      <div :data-id="DataParts.BIRTH" v-on:click="() => handleExpandData(DataParts.BIRTH)" class="clickInfo">
        <span>Kliknij aby rozwinąć!</span>
        <font-awesome-icon class="data-icon" icon="angles-down" />
      </div>
      <div :data-id="DataParts.BIRTH" class="cardWrapper">
        <div class="card">
          <img :src="hair1" alt="">
          <span> &le; {{ polandCompartments.hair.first }}</span>
        </div>
        <div class="card">
          <img :src="hair2" alt="">
          <span>&le; {{ polandCompartments.hair.second }}</span>
        </div>
        <div class="card">
          <img :src="hair3" alt="">
          <span>&gt; {{ polandCompartments.hair.second }}</span>
        </div>
      </div>
    </div>
    <div class="data">
      <h3>{{ chernoffFace.head }} - Głowa</h3>
      <div :data-id="DataParts.DEATHS" v-on:click="() => handleExpandData(DataParts.DEATHS)" class="clickInfo">
        <span>Kliknij aby rozwinąć!</span>
        <font-awesome-icon class="data-icon" icon="angles-down" />
      </div>
      <div :data-id="DataParts.DEATHS" class="cardWrapper">
        <div class="card">
          <img :src="head1" alt="">
          <span> &le; {{ polandCompartments.head.first }}</span>
        </div>
        <div class="card">
          <img :src="head2" alt="">
          <span>&le; {{ polandCompartments.head.second }}</span>
        </div>
        <div class="card">
          <img :src="head3" alt="">
          <span>&gt; {{ polandCompartments.head.second }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

.legend {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  margin-top: 1vmin;

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
  }
}
</style>
