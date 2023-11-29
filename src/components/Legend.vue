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

const handleExpandData = (e: MouseEvent) => {
  const cards = document.querySelectorAll('.cardWrapper');
  cards.forEach(card => card.classList.remove('expanded'));
  e.target.nextElementSibling.classList.add('expanded');
}

</script>
<template>
  <section class="legend">
    <div class="data">
      <h3 v-on:click="e => handleExpandData(e)">Populacja - Oczy</h3>
      <div class="cardWrapper">
        <div class="card">
          <img :src="eyes1" alt="">
          <span>2 000 000</span>
        </div>
        <div class="card">
          <img :src="eyes2" alt="">
          <span>4 000 000</span>
        </div>
        <div class="card">
          <img :src="eyes3" alt="">
          <span>6 000 000</span>
        </div>
      </div>
    </div>
    <div class="data">
      <h3 v-on:click="e => handleExpandData(e)">Migracja Wewnętrzna - Usta</h3>
      <div class="cardWrapper">
        <div class="card">
          <img :src="mouth1" alt="">
          <span>2 000 000</span>
        </div>
        <div class="card">
          <img :src="mouth2" alt="">
          <span>4 000 000</span>
        </div>
        <div class="card">
          <img :src="mouth3" alt="">
          <span>6 000 000</span>
        </div>
      </div>
    </div>
    <div class="data">
      <h3 v-on:click="e => handleExpandData(e)">Migracja Zewnętrzna - Nos</h3>
      <div class="cardWrapper">
        <div class="card">
          <img :src="nose1" alt="">
          <span>2 000 000</span>
        </div>
        <div class="card">
          <img :src="nose2" alt="">
          <span>4 000 000</span>
        </div>
        <div class="card">
          <img :src="nose3" alt="">
          <span>6 000 000</span>
        </div>
      </div>
    </div>
    <div class="data">
      <h3 v-on:click="e => handleExpandData(e)">Urodzenia - Włosy</h3>
      <div class="cardWrapper">
        <div class="card">
          <img :src="hair1" alt="">
          <span>2 000 000</span>
        </div>
        <div class="card">
          <img :src="hair2" alt="">
          <span>4 000 000</span>
        </div>
        <div class="card">
          <img :src="hair3" alt="">
          <span>6 000 000</span>
        </div>
      </div>
    </div>

    <div class="data">
      <h3 v-on:click="e => handleExpandData(e)">Zgony - Głowa</h3>
      <div class="cardWrapper">
        <div class="card">
          <img :src="head1" alt="">
          <span>2 000 000</span>
        </div>
        <div class="card">
          <img :src="head2" alt="">
          <span>4 000 000</span>
        </div>
        <div class="card">
          <img :src="head3" alt="">
          <span>6 000 000</span>
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

  .data {
    width: 100%;
    background-color: $primaryColor;
    padding-bottom: 2vmin;
    border: .4vmin solid $darkColor;

    h3 {
      text-align: center;
      color: $primaryColor;
      background-color: $darkColor;
      padding: 1vmin;
      font-size: 3vmin;
      width: 100%;
      border-radius: .2vmin;
      transition-duration: .4s;

      &:hover {
        color: $secondaryColor;
        cursor: pointer;
      }
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
