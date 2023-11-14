<script setup lang="ts">
import { FacePart, DataParts, PopulationCompartments, MigrationCompartments, MarriageCompartments, BornCompartments, DeathsCompartments } from './../ts/enums';

import voivodesipsData from './../data/voivodeships.json';

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
import { onMounted } from 'vue';

const appStore = useAppStore();
const { chernoffFace, voivodeFaces } = appStore;

const generateChernoffFaces = (e: MouseEvent) => {
  e.preventDefault();
  generateEyes();
  generateMouth();
  generateNose();
  generateHair();
  generateHead();
  // isFacesGenerated.value = true;
  // console.log(voivodeFaces);
}
const generateEyes = () => {
  if (chernoffFace.eyes === DataParts.POPULATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.population <= PopulationCompartments.LOW) voivodeFaces[i].face.eyes = eyes1;
      else if (voivode.population > PopulationCompartments.LOW &&
        voivode.population <= PopulationCompartments.MIDDLE) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    });
  } else if (chernoffFace.eyes === DataParts.MIGRATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.migration <= MigrationCompartments.LOW) voivodeFaces[i].face.eyes = eyes1;
      else if (voivode.migration > MigrationCompartments.LOW &&
        voivode.migration <= MigrationCompartments.MIDDLE) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    });
  }
  else if (chernoffFace.eyes === DataParts.MARRIAGES) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.marriages <= MarriageCompartments.LOW) voivodeFaces[i].face.eyes = eyes1;
      else if (voivode.marriages > MarriageCompartments.LOW &&
        voivode.marriages <= MarriageCompartments.MIDDLE) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    });
  }
  else if (chernoffFace.eyes === DataParts.BORN) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.born <= BornCompartments.LOW) voivodeFaces[i].face.eyes = eyes1;
      else if (voivode.born > BornCompartments.LOW &&
        voivode.born <= BornCompartments.MIDDLE) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    });
  }
  else if (chernoffFace.eyes === DataParts.DEATHS) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.deaths <= DeathsCompartments.LOW) voivodeFaces[i].face.eyes = eyes1;
      else if (voivode.deaths > DeathsCompartments.LOW &&
        voivode.deaths <= DeathsCompartments.MIDDLE) voivodeFaces[i].face.eyes = eyes2;
      else voivodeFaces[i].face.eyes = eyes3;
    });
  }
}

const generateMouth = () => {
  if (chernoffFace.mouth === DataParts.POPULATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.population <= PopulationCompartments.LOW) voivodeFaces[i].face.mouth = mouth1;
      else if (voivode.population > PopulationCompartments.LOW &&
        voivode.population <= PopulationCompartments.MIDDLE) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    });
  } else if (chernoffFace.mouth === DataParts.MIGRATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.migration <= MigrationCompartments.LOW) voivodeFaces[i].face.mouth = mouth1;
      else if (voivode.migration > MigrationCompartments.LOW &&
        voivode.migration <= MigrationCompartments.MIDDLE) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    });
  }
  else if (chernoffFace.mouth === DataParts.MARRIAGES) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.marriages <= MarriageCompartments.LOW) voivodeFaces[i].face.mouth = mouth1;
      else if (voivode.marriages > MarriageCompartments.LOW &&
        voivode.marriages <= MarriageCompartments.MIDDLE) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    });
  }
  else if (chernoffFace.mouth === DataParts.BORN) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.born <= BornCompartments.LOW) voivodeFaces[i].face.mouth = mouth1;
      else if (voivode.born > BornCompartments.LOW &&
        voivode.born <= BornCompartments.MIDDLE) voivodeFaces[i].face.mouth = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    });
  }
  else if (chernoffFace.mouth === DataParts.DEATHS) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.deaths <= DeathsCompartments.LOW) voivodeFaces[i].face.mouth = mouth1;
      else if (voivode.deaths > DeathsCompartments.LOW &&
        voivode.deaths <= DeathsCompartments.MIDDLE) voivodeFaces[i].face.eyes = mouth2;
      else voivodeFaces[i].face.mouth = mouth3;
    });
  }
}

const generateNose = () => {
  if (chernoffFace.nose === DataParts.POPULATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.population <= PopulationCompartments.LOW) voivodeFaces[i].face.nose = nose1;
      else if (voivode.population > PopulationCompartments.LOW &&
        voivode.population <= PopulationCompartments.MIDDLE) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    });
  } else if (chernoffFace.nose === DataParts.MIGRATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.migration <= MigrationCompartments.LOW) voivodeFaces[i].face.nose = nose1;
      else if (voivode.migration > MigrationCompartments.LOW &&
        voivode.migration <= MigrationCompartments.MIDDLE) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    });
  }
  else if (chernoffFace.nose === DataParts.MARRIAGES) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.marriages <= MarriageCompartments.LOW) voivodeFaces[i].face.nose = nose1;
      else if (voivode.marriages > MarriageCompartments.LOW &&
        voivode.marriages <= MarriageCompartments.MIDDLE) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    });
  }
  else if (chernoffFace.nose === DataParts.BORN) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.born <= BornCompartments.LOW) voivodeFaces[i].face.nose = nose1;
      else if (voivode.born > BornCompartments.LOW &&
        voivode.born <= BornCompartments.MIDDLE) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    });
  }
  else if (chernoffFace.nose === DataParts.DEATHS) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.deaths <= DeathsCompartments.LOW) voivodeFaces[i].face.nose = nose1;
      else if (voivode.deaths > DeathsCompartments.LOW &&
        voivode.deaths <= DeathsCompartments.MIDDLE) voivodeFaces[i].face.nose = nose2;
      else voivodeFaces[i].face.nose = nose3;
    });
  }
}

const generateHair = () => {
  if (chernoffFace.hair === DataParts.POPULATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.population <= PopulationCompartments.LOW) voivodeFaces[i].face.hair = hair1;
      else if (voivode.population > PopulationCompartments.LOW &&
        voivode.population <= PopulationCompartments.MIDDLE) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    });
  } else if (chernoffFace.hair === DataParts.MIGRATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.migration <= MigrationCompartments.LOW) voivodeFaces[i].face.hair = hair1;
      else if (voivode.migration > MigrationCompartments.LOW &&
        voivode.migration <= MigrationCompartments.MIDDLE) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    });
  }
  else if (chernoffFace.hair === DataParts.MARRIAGES) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.marriages <= MarriageCompartments.LOW) voivodeFaces[i].face.hair = hair1;
      else if (voivode.marriages > MarriageCompartments.LOW &&
        voivode.marriages <= MarriageCompartments.MIDDLE) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    });
  }
  else if (chernoffFace.hair === DataParts.BORN) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.born <= BornCompartments.LOW) voivodeFaces[i].face.hair = hair1;
      else if (voivode.born > BornCompartments.LOW &&
        voivode.born <= BornCompartments.MIDDLE) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    });
  }
  else if (chernoffFace.hair === DataParts.DEATHS) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.deaths <= DeathsCompartments.LOW) voivodeFaces[i].face.hair = hair1;
      else if (voivode.deaths > DeathsCompartments.LOW &&
        voivode.deaths <= DeathsCompartments.MIDDLE) voivodeFaces[i].face.hair = hair2;
      else voivodeFaces[i].face.hair = hair3;
    });
  }
}

const generateHead = () => {
  if (chernoffFace.head === DataParts.POPULATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.population <= PopulationCompartments.LOW) voivodeFaces[i].face.head = head1;
      else if (voivode.population > PopulationCompartments.LOW &&
        voivode.population <= PopulationCompartments.MIDDLE) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    });
  } else if (chernoffFace.head === DataParts.MIGRATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.migration <= MigrationCompartments.LOW) voivodeFaces[i].face.head = head1;
      else if (voivode.migration > MigrationCompartments.LOW &&
        voivode.migration <= MigrationCompartments.MIDDLE) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    });
  }
  else if (chernoffFace.head === DataParts.MARRIAGES) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.marriages <= MarriageCompartments.LOW) voivodeFaces[i].face.head = head1;
      else if (voivode.marriages > MarriageCompartments.LOW &&
        voivode.marriages <= MarriageCompartments.MIDDLE) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    });
  }
  else if (chernoffFace.head === DataParts.BORN) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.born <= BornCompartments.LOW) voivodeFaces[i].face.head = head1;
      else if (voivode.born > BornCompartments.LOW &&
        voivode.born <= BornCompartments.MIDDLE) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    });
  }
  else if (chernoffFace.head === DataParts.DEATHS) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.deaths <= DeathsCompartments.LOW) voivodeFaces[i].face.head = head1;
      else if (voivode.deaths > DeathsCompartments.LOW &&
        voivode.deaths <= DeathsCompartments.MIDDLE) voivodeFaces[i].face.head = head2;
      else voivodeFaces[i].face.head = head3;
    });
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
  voivodesipsData.forEach(voivode => {
    voivodeFaces.push({
      id: voivode.id,
      symbol: voivode.symbol,
      name: voivode.name,
      points: voivode.points,
      population: voivode.population,
      migration: voivode.migration,
      marriages: voivode.marriages,
      born: voivode.born,
      deaths: voivode.deaths,
      face: {
        head: null,
        hair: null,
        eyes: null,
        mouth: null,
        nose: null,
      }
    });
  })
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
            <option v-bind:value="DataParts.MIGRATION">Migracja</option>
            <option v-bind:value="DataParts.MARRIAGES">Małżeństwa</option>
            <option v-bind:value="DataParts.BORN">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="mouth">Usta:</label>
          <select v-on:change="(e) => setFacePart(e, FacePart.MOUTH)" id="mouth" name="mouth">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option selected v-bind:value="DataParts.MIGRATION">Migracja</option>
            <option v-bind:value="DataParts.MARRIAGES">Małżeństwa</option>
            <option v-bind:value="DataParts.BORN">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="nose">Nos:</label>
          <select v-on:change="(e) => setFacePart(e, FacePart.NOSE)" id="nose" name="nose">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.MIGRATION">Migracja</option>
            <option selected v-bind:value="DataParts.MARRIAGES">Małżeństwa</option>
            <option v-bind:value="DataParts.BORN">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="hair">Brwi:</label>
          <select v-on:change="(e) => setFacePart(e, FacePart.HAIR)" id="hair" name="hair">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.MIGRATION">Migracja</option>
            <option v-bind:value="DataParts.MARRIAGES">Małżeństwa</option>
            <option selected v-bind:value="DataParts.BORN">Urodzenia</option>
            <option v-bind:value="DataParts.DEATHS">Zgony</option>
          </select>
        </div>

        <div class="form-group">
          <label for="head">Głowa:</label>
          <select v-on:change="(e) => setFacePart(e, FacePart.HEAD)" id="head" name="head">
            <option v-bind:value="DataParts.POPULATION">Populacja</option>
            <option v-bind:value="DataParts.MIGRATION">Migracja</option>
            <option v-bind:value="DataParts.MARRIAGES">Małżeństwa</option>
            <option v-bind:value="DataParts.BORN">Urodzenia</option>
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