<script setup lang="ts">
import { DataParts } from './../ts/enums';
import { VoivodeAverage } from './../ts/types';
import voivodeshipsData from './../data/voivodeships.json';

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

import { useAppStore } from '../stores/app';
import { onMounted, reactive } from 'vue';

const appStore = useAppStore();
const { chernoffFace, voivodeFaces, isFacesGenerated, polandAverages, polandCompartments } = appStore;

const voivodeAverages = reactive<VoivodeAverage[]>([]);

const generateChernoffFaces = (e: MouseEvent) => {
  e.preventDefault();
  setFacePart();
  generateEyes();
  generateMouth();
  generateNose();
  generateHair();
  generateHead();
}

const generateEyes = () => {
  if (chernoffFace.eyes === DataParts.POPULATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.eyes.first = Math.floor(polandAverages.population * 0.33);
      polandCompartments.eyes.second = Math.floor(polandAverages.population * 0.66);
      if (voivodeAverages[i].population <= polandCompartments.eyes.first) voivodeFaces[i].face.eyes = eyes1;
      else if (voivodeAverages[i].population <= polandCompartments.eyes.second) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    }
  } else if (chernoffFace.eyes === DataParts.INTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.eyes.first = Math.floor(polandAverages.internalMigration * 0.33);
      polandCompartments.eyes.second = Math.floor(polandAverages.internalMigration * 0.66);
      console.log(polandAverages.internalMigration);
      if (voivodeAverages[i].internalMigration <= polandCompartments.eyes.first) voivodeFaces[i].face.eyes = eyes1;
      else if (voivodeAverages[i].internalMigration <= polandCompartments.eyes.second) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    }
  }
  else if (chernoffFace.eyes === DataParts.EXTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.eyes.first = Math.floor(polandAverages.externalMigration * 0.33);
      polandCompartments.eyes.second = Math.floor(polandAverages.externalMigration * 0.66);
      if (voivodeAverages[i].externalMigration <= polandCompartments.eyes.first) voivodeFaces[i].face.eyes = eyes1;
      else if (voivodeAverages[i].externalMigration <= polandCompartments.eyes.second) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    }
  }
  else if (chernoffFace.eyes === DataParts.BIRTH) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.eyes.first = Math.floor(polandAverages.birth * 0.33);
      polandCompartments.eyes.second = Math.floor(polandAverages.birth * 0.66);
      if (voivodeAverages[i].birth <= polandCompartments.eyes.first) voivodeFaces[i].face.eyes = eyes1;
      else if (voivodeAverages[i].birth <= polandCompartments.eyes.second) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    }
  }
  else if (chernoffFace.eyes === DataParts.DEATHS) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.eyes.first = Math.floor(polandAverages.deaths * 0.33);
      polandCompartments.eyes.second = Math.floor(polandAverages.deaths * 0.66);
      if (voivodeAverages[i].deaths <= polandCompartments.eyes.first) voivodeFaces[i].face.eyes = eyes1;
      else if (voivodeAverages[i].deaths <= polandCompartments.eyes.second) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    }
  }
}

const generateMouth = () => {
  if (chernoffFace.mouth === DataParts.POPULATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.mouth.first = Math.floor(polandAverages.population * 0.33);
      polandCompartments.mouth.second = Math.floor(polandAverages.population * 0.66);
      if (voivodeAverages[i].population <= polandCompartments.mouth.first) voivodeFaces[i].face.mouth = mouth1;
      else if (voivodeAverages[i].population <= polandCompartments.mouth.second) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    }
  } else if (chernoffFace.mouth === DataParts.INTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.mouth.first = Math.floor(polandAverages.internalMigration * 0.33);
      polandCompartments.mouth.second = Math.floor(polandAverages.internalMigration * 0.66);
      if (voivodeAverages[i].internalMigration <= -703) {
        voivodeFaces[i].face.mouth = mouth1;
        console.log('1', voivodeAverages[i].internalMigration);
      }
      else if (voivodeAverages[i].internalMigration <= 1405) {
        voivodeFaces[i].face.mouth = mouth2;
        console.log('2', voivodeAverages[i].internalMigration);
      }
      else {
        voivodeFaces[i].face.mouth = mouth3;
        console.log('3', voivodeAverages[i].internalMigration);
      }
    }
  }
  else if (chernoffFace.mouth === DataParts.EXTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.mouth.first = Math.floor(polandAverages.externalMigration * 0.33);
      polandCompartments.mouth.second = Math.floor(polandAverages.externalMigration * 0.66);
      if (voivodeAverages[i].externalMigration <= polandCompartments.mouth.first) voivodeFaces[i].face.mouth = mouth1;
      else if (voivodeAverages[i].externalMigration <= polandCompartments.mouth.second) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    }
  }
  else if (chernoffFace.mouth === DataParts.BIRTH) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.mouth.first = Math.floor(polandAverages.birth * 0.33);
      polandCompartments.mouth.second = Math.floor(polandAverages.birth * 0.66);
      if (voivodeAverages[i].birth <= polandCompartments.mouth.first) voivodeFaces[i].face.mouth = mouth1;
      else if (voivodeAverages[i].birth <= polandCompartments.mouth.second) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    }
  }
  else if (chernoffFace.mouth === DataParts.DEATHS) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.mouth.first = Math.floor(polandAverages.deaths * 0.33);
      polandCompartments.mouth.second = Math.floor(polandAverages.deaths * 0.66);
      if (voivodeAverages[i].deaths <= polandCompartments.mouth.first) voivodeFaces[i].face.mouth = mouth1;
      else if (voivodeAverages[i].deaths <= polandCompartments.mouth.second) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    }
  }
}

const generateNose = () => {
  if (chernoffFace.nose === DataParts.POPULATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.nose.first = Math.floor(polandAverages.population * 0.33);
      polandCompartments.nose.second = Math.floor(polandAverages.population * 0.66);
      if (voivodeAverages[i].population <= polandCompartments.nose.first) voivodeFaces[i].face.nose = nose1;
      else if (voivodeAverages[i].population <= polandCompartments.nose.second) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    }
  } else if (chernoffFace.nose === DataParts.INTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.nose.first = Math.floor(polandAverages.internalMigration * 0.33);
      polandCompartments.nose.second = Math.floor(polandAverages.internalMigration * 0.66);
      if (voivodeAverages[i].internalMigration <= polandCompartments.nose.first) voivodeFaces[i].face.nose = nose1;
      else if (voivodeAverages[i].internalMigration <= polandCompartments.nose.second) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    }
  }
  else if (chernoffFace.nose === DataParts.EXTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.nose.first = Math.floor(polandAverages.externalMigration * 0.33);
      polandCompartments.nose.second = Math.floor(polandAverages.externalMigration * 0.66);
      if (voivodeAverages[i].externalMigration <= polandCompartments.nose.first) voivodeFaces[i].face.nose = nose1;
      else if (voivodeAverages[i].externalMigration <= polandCompartments.nose.second) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    }
  }
  else if (chernoffFace.nose === DataParts.BIRTH) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.nose.first = Math.floor(polandAverages.birth * 0.33);
      polandCompartments.nose.second = Math.floor(polandAverages.birth * 0.66);
      if (voivodeAverages[i].birth <= polandCompartments.nose.first) voivodeFaces[i].face.nose = nose1;
      else if (voivodeAverages[i].birth <= polandCompartments.nose.second) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    }
  }
  else if (chernoffFace.nose === DataParts.DEATHS) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.nose.first = Math.floor(polandAverages.deaths * 0.33);
      polandCompartments.nose.second = Math.floor(polandAverages.deaths * 0.66);
      if (voivodeAverages[i].deaths <= polandCompartments.nose.first) voivodeFaces[i].face.nose = nose1;
      else if (voivodeAverages[i].deaths <= polandCompartments.nose.second) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    }
  }
}

const generateHair = () => {
  if (chernoffFace.hair === DataParts.POPULATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.hair.first = Math.floor(polandAverages.population * 0.33);
      polandCompartments.hair.second = Math.floor(polandAverages.population * 0.66);
      if (voivodeAverages[i].population <= polandCompartments.hair.first) voivodeFaces[i].face.hair = hair1;
      else if (voivodeAverages[i].population <= polandCompartments.hair.second) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    }
  } else if (chernoffFace.hair === DataParts.INTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.hair.first = Math.floor(polandAverages.internalMigration * 0.33);
      polandCompartments.hair.second = Math.floor(polandAverages.internalMigration * 0.66);
      if (voivodeAverages[i].internalMigration <= polandCompartments.hair.first) voivodeFaces[i].face.hair = hair1;
      else if (voivodeAverages[i].internalMigration <= polandCompartments.hair.second) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    }
  }
  else if (chernoffFace.hair === DataParts.EXTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.hair.first = Math.floor(polandAverages.externalMigration * 0.33);
      polandCompartments.hair.second = Math.floor(polandAverages.externalMigration * 0.66);
      if (voivodeAverages[i].externalMigration <= polandCompartments.hair.first) voivodeFaces[i].face.hair = hair1;
      else if (voivodeAverages[i].externalMigration <= polandCompartments.hair.second) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    }
  }
  else if (chernoffFace.hair === DataParts.BIRTH) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.hair.first = Math.floor(polandAverages.birth * 0.33);
      polandCompartments.hair.second = Math.floor(polandAverages.birth * 0.66);
      if (voivodeAverages[i].birth <= polandCompartments.hair.first) voivodeFaces[i].face.hair = hair1;
      else if (voivodeAverages[i].birth <= polandCompartments.hair.second) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    }
  }
  else if (chernoffFace.hair === DataParts.DEATHS) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.hair.first = Math.floor(polandAverages.deaths * 0.33);
      polandCompartments.hair.second = Math.floor(polandAverages.deaths * 0.66);
      if (voivodeAverages[i].deaths <= polandCompartments.hair.first) voivodeFaces[i].face.hair = hair1;
      else if (voivodeAverages[i].deaths <= polandCompartments.hair.second) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    }
  }
}

const generateHead = () => {
  if (chernoffFace.head === DataParts.POPULATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.head.first = Math.floor(polandAverages.population * 0.33);
      polandCompartments.head.second = Math.floor(polandAverages.population * 0.66);
      if (voivodeAverages[i].population <= polandCompartments.head.first) voivodeFaces[i].face.head = head1;
      else if (voivodeAverages[i].population <= polandCompartments.hair.second) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    }
  } else if (chernoffFace.head === DataParts.INTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.head.first = Math.floor(polandAverages.internalMigration * 0.33);
      polandCompartments.head.second = Math.floor(polandAverages.internalMigration * 0.66);
      if (voivodeAverages[i].internalMigration <= polandCompartments.head.first) voivodeFaces[i].face.head = head1;
      else if (voivodeAverages[i].internalMigration <= polandCompartments.hair.second) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    }
  }
  else if (chernoffFace.head === DataParts.EXTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.head.first = Math.floor(polandAverages.externalMigration * 0.33);
      polandCompartments.head.second = Math.floor(polandAverages.externalMigration * 0.66);
      if (voivodeAverages[i].externalMigration <= polandCompartments.head.first) voivodeFaces[i].face.head = head1;
      else if (voivodeAverages[i].externalMigration <= polandCompartments.hair.second) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    }
  }
  else if (chernoffFace.head === DataParts.BIRTH) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.head.first = Math.floor(polandAverages.birth * 0.33);
      polandCompartments.head.second = Math.floor(polandAverages.birth * 0.66);
      if (voivodeAverages[i].birth <= polandCompartments.head.first) voivodeFaces[i].face.head = head1;
      else if (voivodeAverages[i].birth <= polandCompartments.hair.second) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    }
  }
  else if (chernoffFace.head === DataParts.DEATHS) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      polandCompartments.head.first = Math.floor(polandAverages.deaths * 0.33);
      polandCompartments.head.second = Math.floor(polandAverages.deaths * 0.66);
      if (voivodeAverages[i].deaths <= polandCompartments.head.first) voivodeFaces[i].face.head = head1;
      else if (voivodeAverages[i].deaths <= polandCompartments.hair.second) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    }
  }
}

const setFacePart = () => {
  const selects = document.querySelectorAll('select');
  chernoffFace.eyes = selects[0].value;
  chernoffFace.mouth = selects[1].value;
  chernoffFace.nose = selects[2].value;
  chernoffFace.hair = selects[3].value;
  chernoffFace.head = selects[4].value;
  isFacesGenerated.generated = true;
}

onMounted(() => {
  voivodeshipsData.forEach((voivode, index) => {
    let voivodeshipsPopulationSum = 0;
    let voivodeshipsInternalMigrationSum = 0;
    let voivodeshipsExternalMigrationSum = 0;
    let voivodeshipsBirthSum = 0;
    let voivodeshipsDeathsSum = 0;

    let polandPopulationSum = 0;
    let polandInternalMigrationSum = 0;
    let polandExternalMigrationSum = 0;
    let polandBirthSum = 0;
    let polandDeathsSum = 0;

    voivode.population.forEach(population => voivodeshipsPopulationSum += population);
    voivode.internalMigration.forEach(internalMigration => voivodeshipsInternalMigrationSum += internalMigration);
    voivode.externalMigration.forEach(externalMigration => voivodeshipsExternalMigrationSum += externalMigration);
    voivode.birth.forEach(birth => voivodeshipsBirthSum += birth);
    voivode.deaths.forEach(deaths => voivodeshipsDeathsSum += deaths);
    voivodeAverages.push({
      population: Number((voivodeshipsPopulationSum / voivode.population.length).toFixed()),
      internalMigration: Number((voivodeshipsInternalMigrationSum / voivode.internalMigration.length).toFixed()),
      externalMigration: Number((voivodeshipsExternalMigrationSum / voivode.externalMigration.length).toFixed()),
      birth: Number((voivodeshipsBirthSum / voivode.birth.length).toFixed()),
      deaths: Number((voivodeshipsDeathsSum / voivode.deaths.length).toFixed())
    });

    for (let i = 0; i < voivodeAverages.length; i++) {
      polandPopulationSum += voivodeAverages[i].population;
      polandInternalMigrationSum += voivodeAverages[i].internalMigration;
      polandExternalMigrationSum += voivodeAverages[i].externalMigration;
      polandBirthSum += voivodeAverages[i].birth;
      polandDeathsSum += voivodeAverages[i].deaths;
    }
    polandAverages.population = Number((polandPopulationSum / voivodeshipsData.length).toFixed());
    polandAverages.internalMigration = Number((polandInternalMigrationSum / voivodeshipsData.length).toFixed());
    polandAverages.externalMigration = Number((polandExternalMigrationSum / voivodeshipsData.length).toFixed());
    polandAverages.birth = Number((polandBirthSum / voivodeshipsData.length).toFixed());
    polandAverages.deaths = Number((polandDeathsSum / voivodeshipsData.length).toFixed());
    voivodeFaces.push({
      id: voivode.id,
      symbol: voivode.symbol,
      name: voivode.name,
      points: voivode.points,
      population: voivodeAverages[index].population,
      internalMigration: voivodeAverages[index].internalMigration,
      externalMigration: voivodeAverages[index].externalMigration,
      birth: voivodeAverages[index].birth,
      deaths: voivodeAverages[index].deaths,
      face: {
        head: null,
        hair: null,
        eyes: null,
        mouth: null,
        nose: null,
      }
    });
  });
});
</script>
<template>
  <section class="interface">
    <div class="configure-box">
      <h2>Skonfiguruj Twarze Chernoffa</h2>
      <form>
        <div class="form-group">
          <label for="eyes">Oczy:</label>
          <select id="eyes" name="eyes">
            <option selected v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.INTERNAL_MIGRATION">Migracje Wewnętrzne</option>
            <option v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracje Zagraniczne</option>
            <option v-bind:value="DataParts.BIRTH">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="mouth">Usta:</label>
          <select id="mouth" name="mouth">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option selected v-bind:value="DataParts.INTERNAL_MIGRATION">Migracje Wewnętrzne</option>
            <option v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracje Zagraniczne</option>
            <option v-bind:value="DataParts.BIRTH">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="nose">Nos:</label>
          <select id="nose" name="nose">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.INTERNAL_MIGRATION">Migracje Wewnętrzne</option>
            <option selected v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracje Zagraniczne</option>
            <option v-bind:value="DataParts.BIRTH">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="hair">Włosy:</label>
          <select id="hair" name="hair">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.INTERNAL_MIGRATION">Migracje Wewnętrzne</option>
            <option v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracje Zagraniczne</option>
            <option selected v-bind:value="DataParts.BIRTH">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="head">Głowa:</label>
          <select id="head" name="head">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.INTERNAL_MIGRATION">Migracje Wewnętrzne</option>
            <option v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracje Zagraniczne</option>
            <option v-bind:value="DataParts.BIRTH">Urodzenia</option>
            <option selected v-bind:value="DataParts.DEATHS">Zgony</option>
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