<script setup lang="ts">
import { FacePart, DataParts } from './../ts/enums';
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
const { chernoffFace, voivodeFaces } = appStore;

const voivodeAverages = reactive<VoivodeAverage[]>([]);
const polandAverages = reactive<VoivodeAverage>({
  population: 0,
  internalMigration: 0,
  externalMigration: 0,
  birth: 0,
  deaths: 0
});
const generateChernoffFaces = (e: MouseEvent) => {
  e.preventDefault();
  generateEyes();
  generateMouth();
  generateNose();
  generateHair();
  generateHead();

}
const generateEyes = () => {
  if (chernoffFace.eyes === DataParts.POPULATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.population * 0.33);
      const secondCompartment = Math.floor(polandAverages.population * 0.66);
      if (voivodeAverages[i].population <= firstCompartment) voivodeFaces[i].face.eyes = eyes1;
      else if (voivodeAverages[i].population <= secondCompartment) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    }
  } else if (chernoffFace.eyes === DataParts.INTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.internalMigration * 0.33);
      const secondCompartment = Math.floor(polandAverages.internalMigration * 0.66);
      if (voivodeAverages[i].internalMigration <= firstCompartment) voivodeFaces[i].face.eyes = eyes1;
      else if (voivodeAverages[i].internalMigration <= secondCompartment) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    }
  }
  else if (chernoffFace.eyes === DataParts.EXTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.externalMigration * 0.33);
      const secondCompartment = Math.floor(polandAverages.externalMigration * 0.66);
      if (voivodeAverages[i].externalMigration <= firstCompartment) voivodeFaces[i].face.eyes = eyes1;
      else if (voivodeAverages[i].externalMigration <= secondCompartment) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    }
  }
  else if (chernoffFace.eyes === DataParts.BIRTH) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.birth * 0.33);
      const secondCompartment = Math.floor(polandAverages.birth * 0.66);
      if (voivodeAverages[i].birth <= firstCompartment) voivodeFaces[i].face.eyes = eyes1;
      else if (voivodeAverages[i].birth <= secondCompartment) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    }
  }
  else if (chernoffFace.eyes === DataParts.DEATHS) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.deaths * 0.33);
      const secondCompartment = Math.floor(polandAverages.deaths * 0.66);
      if (voivodeAverages[i].deaths <= firstCompartment) voivodeFaces[i].face.eyes = eyes1;
      else if (voivodeAverages[i].deaths <= secondCompartment) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    }
  }
}

const generateMouth = () => {
  if (chernoffFace.mouth === DataParts.POPULATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.population * 0.33);
      const secondCompartment = Math.floor(polandAverages.population * 0.66);
      if (voivodeAverages[i].population <= firstCompartment) voivodeFaces[i].face.mouth = mouth1;
      else if (voivodeAverages[i].population <= secondCompartment) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    }
  } else if (chernoffFace.mouth === DataParts.INTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.internalMigration * 0.33);
      const secondCompartment = Math.floor(polandAverages.internalMigration * 0.66);
      if (voivodeAverages[i].internalMigration <= firstCompartment) voivodeFaces[i].face.mouth = mouth1;
      else if (voivodeAverages[i].internalMigration <= secondCompartment) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    }
  }
  else if (chernoffFace.mouth === DataParts.EXTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.externalMigration * 0.33);
      const secondCompartment = Math.floor(polandAverages.externalMigration * 0.66);
      if (voivodeAverages[i].externalMigration <= firstCompartment) voivodeFaces[i].face.mouth = mouth1;
      else if (voivodeAverages[i].externalMigration <= secondCompartment) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    }
  }
  else if (chernoffFace.mouth === DataParts.BIRTH) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.birth * 0.33);
      const secondCompartment = Math.floor(polandAverages.birth * 0.66);
      if (voivodeAverages[i].birth <= firstCompartment) voivodeFaces[i].face.mouth = mouth1;
      else if (voivodeAverages[i].birth <= secondCompartment) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    }
  }
  else if (chernoffFace.mouth === DataParts.DEATHS) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.deaths * 0.33);
      const secondCompartment = Math.floor(polandAverages.deaths * 0.66);
      if (voivodeAverages[i].deaths <= firstCompartment) voivodeFaces[i].face.mouth = mouth1;
      else if (voivodeAverages[i].deaths <= secondCompartment) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    }
  }
}

const generateNose = () => {
  if (chernoffFace.nose === DataParts.POPULATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.population * 0.33);
      const secondCompartment = Math.floor(polandAverages.population * 0.66);
      if (voivodeAverages[i].population <= firstCompartment) voivodeFaces[i].face.nose = nose1;
      else if (voivodeAverages[i].population <= secondCompartment) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    }
  } else if (chernoffFace.nose === DataParts.INTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.internalMigration * 0.33);
      const secondCompartment = Math.floor(polandAverages.internalMigration * 0.66);
      if (voivodeAverages[i].internalMigration <= firstCompartment) voivodeFaces[i].face.nose = nose1;
      else if (voivodeAverages[i].internalMigration <= secondCompartment) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    }
  }
  else if (chernoffFace.nose === DataParts.EXTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.externalMigration * 0.33);
      const secondCompartment = Math.floor(polandAverages.externalMigration * 0.66);
      if (voivodeAverages[i].externalMigration <= firstCompartment) voivodeFaces[i].face.nose = nose1;
      else if (voivodeAverages[i].externalMigration <= secondCompartment) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    }
  }
  else if (chernoffFace.nose === DataParts.BIRTH) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.birth * 0.33);
      const secondCompartment = Math.floor(polandAverages.birth * 0.66);
      if (voivodeAverages[i].birth <= firstCompartment) voivodeFaces[i].face.nose = nose1;
      else if (voivodeAverages[i].birth <= secondCompartment) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    }
  }
  else if (chernoffFace.nose === DataParts.DEATHS) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.deaths * 0.33);
      const secondCompartment = Math.floor(polandAverages.deaths * 0.66);
      if (voivodeAverages[i].deaths <= firstCompartment) voivodeFaces[i].face.nose = nose1;
      else if (voivodeAverages[i].deaths <= secondCompartment) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    }
  }
}

const generateHair = () => {
  if (chernoffFace.hair === DataParts.POPULATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.population * 0.33);
      const secondCompartment = Math.floor(polandAverages.population * 0.66);
      if (voivodeAverages[i].population <= firstCompartment) voivodeFaces[i].face.hair = hair1;
      else if (voivodeAverages[i].population <= secondCompartment) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    }
  } else if (chernoffFace.hair === DataParts.INTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.internalMigration * 0.33);
      const secondCompartment = Math.floor(polandAverages.internalMigration * 0.66);
      if (voivodeAverages[i].internalMigration <= firstCompartment) voivodeFaces[i].face.hair = hair1;
      else if (voivodeAverages[i].internalMigration <= secondCompartment) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    }
  }
  else if (chernoffFace.hair === DataParts.EXTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.externalMigration * 0.33);
      const secondCompartment = Math.floor(polandAverages.externalMigration * 0.66);
      if (voivodeAverages[i].externalMigration <= firstCompartment) voivodeFaces[i].face.hair = hair1;
      else if (voivodeAverages[i].externalMigration <= secondCompartment) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    }
  }
  else if (chernoffFace.hair === DataParts.BIRTH) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.birth * 0.33);
      const secondCompartment = Math.floor(polandAverages.birth * 0.66);
      if (voivodeAverages[i].birth <= firstCompartment) voivodeFaces[i].face.hair = hair1;
      else if (voivodeAverages[i].birth <= secondCompartment) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    }
  }
  else if (chernoffFace.hair === DataParts.DEATHS) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.deaths * 0.33);
      const secondCompartment = Math.floor(polandAverages.deaths * 0.66);
      if (voivodeAverages[i].deaths <= firstCompartment) voivodeFaces[i].face.hair = hair1;
      else if (voivodeAverages[i].deaths <= secondCompartment) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    }
  }
}

const generateHead = () => {
  if (chernoffFace.head === DataParts.POPULATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.population * 0.33);
      const secondCompartment = Math.floor(polandAverages.population * 0.66);
      if (voivodeAverages[i].population <= firstCompartment) voivodeFaces[i].face.head = head1;
      else if (voivodeAverages[i].population <= secondCompartment) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    }
  } else if (chernoffFace.head === DataParts.INTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.internalMigration * 0.33);
      const secondCompartment = Math.floor(polandAverages.internalMigration * 0.66);
      if (voivodeAverages[i].internalMigration <= firstCompartment) voivodeFaces[i].face.head = head1;
      else if (voivodeAverages[i].internalMigration <= secondCompartment) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    }
  }
  else if (chernoffFace.head === DataParts.EXTERNAL_MIGRATION) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.externalMigration * 0.33);
      const secondCompartment = Math.floor(polandAverages.externalMigration * 0.66);
      if (voivodeAverages[i].externalMigration <= firstCompartment) voivodeFaces[i].face.head = head1;
      else if (voivodeAverages[i].externalMigration <= secondCompartment) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    }
  }
  else if (chernoffFace.head === DataParts.BIRTH) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.birth * 0.33);
      const secondCompartment = Math.floor(polandAverages.birth * 0.66);
      if (voivodeAverages[i].birth <= firstCompartment) voivodeFaces[i].face.head = head1;
      else if (voivodeAverages[i].birth <= secondCompartment) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    }
  }
  else if (chernoffFace.head === DataParts.DEATHS) {
    for (let i = 0; i < voivodeshipsData.length; i++) {
      const firstCompartment = Math.floor(polandAverages.deaths * 0.33);
      const secondCompartment = Math.floor(polandAverages.deaths * 0.66);
      if (voivodeAverages[i].deaths <= firstCompartment) voivodeFaces[i].face.head = head1;
      else if (voivodeAverages[i].deaths <= secondCompartment) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    }
  }
}

const setFacePart = (e: Event, part: FacePart) => {
  const select = e.target as HTMLSelectElement;
  if (part === FacePart.EYES) chernoffFace.eyes = Number(select.value);
  else if (part === FacePart.MOUTH) chernoffFace.mouth = Number(select.value);
  else if (part === FacePart.NOSE) chernoffFace.nose = Number(select.value);
  else if (part === FacePart.HAIR) chernoffFace.hair = Number(select.value);
  else if (part === FacePart.HEAD) chernoffFace.head = Number(select.value);
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
  console.log(polandAverages);
});
</script>
<template>
  <section class="interface">
    <div class="configure-box">
      <h2>Skonfiguruj Twarze Chernoffa</h2>
      <form>
        <div class="form-group">
          <label for="eyes">Oczy:</label>
          <select v-on:change="(e) => setFacePart(e, FacePart.EYES)" id="eyes" name="eyes">
            <option selected v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.INTERNAL_MIGRATION">Migracja Wewnętrzna</option>
            <option v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracja Zewnętrzna</option>
            <option v-bind:value="DataParts.BIRTH">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="mouth">Usta:</label>
          <select v-on:change="(e) => setFacePart(e, FacePart.MOUTH)" id="mouth" name="mouth">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option selected v-bind:value="DataParts.INTERNAL_MIGRATION">Migracja Wewnętrzna</option>
            <option v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracja Zewnętrzna</option>
            <option v-bind:value="DataParts.BIRTH">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="nose">Nos:</label>
          <select v-on:change="(e) => setFacePart(e, FacePart.NOSE)" id="nose" name="nose">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.INTERNAL_MIGRATION">Migracja Wewnętrzna</option>
            <option selected v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracja Zewnętrzna</option>
            <option v-bind:value="DataParts.BIRTH">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="hair">Włosy:</label>
          <select v-on:change="(e) => setFacePart(e, FacePart.HAIR)" id="hair" name="hair">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.INTERNAL_MIGRATION">Migracja Wewnętrzna</option>
            <option v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracja Zewnętrzna</option>
            <option selected v-bind:value="DataParts.BIRTH">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="head">Głowa:</label>
          <select v-on:change="(e) => setFacePart(e, FacePart.HEAD)" id="head" name="head">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.INTERNAL_MIGRATION">Migracja Wewnętrzna</option>
            <option v-bind:value="DataParts.EXTERNAL_MIGRATION">Migracja Zewnętrzna</option>
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