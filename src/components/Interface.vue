<script setup lang="ts">

import voivodesipsData from './../data/voivodeships.json';

import eyes1 from './../assets/img/faces/test/eyes1.png';
import eyes2 from './../assets/img/faces/test/eyes2.png';
import eyes3 from './../assets/img/faces/test/eyes3.png';

import mouth1 from './../assets/img/faces/test/mouth1.png';
import mouth2 from './../assets/img/faces/test/mouth2.png';
import mouth3 from './../assets/img/faces/test/mouth3.png';

import nose1 from './../assets/img/faces/test/nose1.png';
import nose2 from './../assets/img/faces/test/nose2.png';
import nose3 from './../assets/img/faces/test/nose3.png';

import eyebrows1 from './../assets/img/faces/test/eyebrows1.png';
import eyebrows2 from './../assets/img/faces/test/eyebrows2.png';
import eyebrows3 from './../assets/img/faces/test/eyebrows3.png';

import head1 from './../assets/img/faces/test/head1.png';
import head2 from './../assets/img/faces/test/head2.png';
import head3 from './../assets/img/faces/test/head3.png';

import { ref } from 'vue';

const eyesSelect = ref<String | null>(null);
const mouthSelect = ref<String | null>(null);
const noseSelect = ref<String | null>(null);
const eyebrowsSelect = ref<String | null>(null);
const headSelect = ref<String | null>(null);

const generateChernoffFaces = (e: MouseEvent) => {
  e.preventDefault();
  const eyes = document.getElementById('eyes') as HTMLSelectElement;
  const mouth = document.getElementById('mouth') as HTMLSelectElement;
  const nose = document.getElementById('nose') as HTMLSelectElement;
  const eyebrows = document.getElementById('eyebrows') as HTMLSelectElement;
  const head = document.getElementById('head') as HTMLSelectElement;
  eyesSelect.value = eyes.value;
  mouthSelect.value = mouth.value;
  noseSelect.value = nose.value;
  eyebrowsSelect.value = eyebrows.value;
  headSelect.value = head.value;
}

const setMouth = (e: MouseEvent) => {
  mouthSelect.value = e.target.value;
}

</script>
<template>
  <section class="interface">
    <div class="configure-box">
      <h2>Skonfiguruj Twarze Chernoffa</h2>
      <form>
        <div class="form-group">
          <label for="eyes">Oczy:</label>
          <select id="eyes" name="eyes">
            <option value="population">Populacja</option>
            <option value="migration">Migracja</option>
            <option value="marriages">Małżeństwa</option>
            <option value="born">Urodzenia</option>
            <option value="deaths">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="mouth">Usta:</label>
          <select v-on:change="(e) => setMouth(e)" id="mouth" name="mouth">
            <option value="population">Populacja</option>
            <option value="migration">Migracja</option>
            <option value="marriages">Małżeństwa</option>
            <option value="born">Urodzenia</option>
            <option value="deaths">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="nose">Nos:</label>
          <select id="nose" name="nose">
            <option value="population">Populacja</option>
            <option value="migration">Migracja</option>
            <option value="marriages">Małżeństwa</option>
            <option value="born">Urodzenia</option>
            <option value="deaths">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="eyebrows">Brwi:</label>
          <select id="eyebrows" name="eyebrows">
            <option value="population">Populacja</option>
            <option value="migration">Migracja</option>
            <option value="marriages">Małżeństwa</option>
            <option value="born">Urodzenia</option>
            <option value="deaths">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="head">Głowa:</label>
          <select id="head" name="head">
            <option value="population">Populacja</option>
            <option value="migration">Migracja</option>
            <option value="marriages">Małżeństwa</option>
            <option value="born">Urodzenia</option>
            <option value="deaths">Zgony</option>
          </select>
        </div>

        <button v-on:click="(e) => generateChernoffFaces(e)">Generuj Twarze</button>
      </form>
    </div>

  </section>
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';

.interface {
  width: 25vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .configure-box {
    background-color: $secondaryColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2vmin;
    box-shadow: 1vmin 1vmin 2vmin 0 $supportColor;
    border: 2px solid $darkColor;

    h2 {
      color: $darkColor;
      font-size: 4vmin;
      font-family: $fontDecorative;
      width: 100%;
      padding: 2vmin;
      text-align: center;
      border-bottom: 2px solid $darkColor;
    }

    form {
      padding: 4vmin 8vmin;

      .form-group {
        margin-bottom: 1vmin;

        label {
          display: block;
          margin-bottom: 1vmin;
          margin-left: -3vmin;
          color: $darkColor;
          font-weight: bold;
          font-size: 2vmin;
        }

        select {
          padding: 1vmin;
          border: 1px solid $bgColor;
          border-radius: 1vmin;
          width: 25vmin;
          outline: none;
          cursor: pointer;
        }
      }

      button {
        width: 25vmin;
        padding: 2vmin;
        background-color: $primaryColor;
        color: $bgColor;
        border: 2px solid $primaryColor;
        border-radius: 1vmin;
        cursor: pointer;
        font-size: 1.5vmin;
        transition-duration: .4s;
        font-weight: bold;
        margin-top: 5vmin;

        &:hover {
          background-color: darken($supportColor, 20%);
          border-color: $bgColor;
          letter-spacing: 2px;
        }
      }
    }
  }
}
</style>