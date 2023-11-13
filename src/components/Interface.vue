<script setup lang="ts">
import { FacePart, DataParts, PopulationCompartments, MigrationCompartments, MarriageCompartments, BornCompartments, DeathsCompartments } from './../ts/enums';
import { VoivodeFace } from './../ts/types';

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

import { useAppStore } from '../stores/app';
import { reactive, onMounted } from 'vue';

const appStore = useAppStore();
const { chernoffFace } = appStore;

const voivodeFaces = reactive<VoivodeFace[]>([]);

const generateChernoffFaces = (e: MouseEvent) => {
  e.preventDefault();
  generateEyes();
  generateMouth();
  generateNose();
  generateEyebrows();
  generateHead();
  console.log(voivodeFaces);
}
const generateEyes = () => {
  if (chernoffFace.eyes === DataParts.POPULATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.population <= PopulationCompartments.LOW) voivodeFaces[i].eyes = eyes1;
      else if (voivode.population > PopulationCompartments.LOW &&
        voivode.population <= PopulationCompartments.MIDDLE) voivodeFaces[i].eyes = eyes2;
      else voivodeFaces[i].eyes = eyes3;
    });
  } else if (chernoffFace.eyes === DataParts.MIGRATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.migration <= MigrationCompartments.LOW) voivodeFaces[i].eyes = eyes1;
      else if (voivode.migration > MigrationCompartments.LOW &&
        voivode.migration <= MigrationCompartments.MIDDLE) voivodeFaces[i].eyes = eyes2;
      else voivodeFaces[i].eyes = eyes3;
    });
  }
  else if (chernoffFace.eyes === DataParts.MARRIAGES) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.marriages <= MarriageCompartments.LOW) voivodeFaces[i].eyes = eyes1;
      else if (voivode.marriages > MarriageCompartments.LOW &&
        voivode.marriages <= MarriageCompartments.MIDDLE) voivodeFaces[i].eyes = eyes2;
      else voivodeFaces[i].eyes = eyes3;
    });
  }
  else if (chernoffFace.eyes === DataParts.BORN) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.born <= BornCompartments.LOW) voivodeFaces[i].eyes = eyes1;
      else if (voivode.born > BornCompartments.LOW &&
        voivode.born <= BornCompartments.MIDDLE) voivodeFaces[i].eyes = eyes2;
      else voivodeFaces[i].eyes = eyes3;
    });
  }
  else if (chernoffFace.eyes === DataParts.DEATHS) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.deaths <= DeathsCompartments.LOW) voivodeFaces[i].eyes = eyes1;
      else if (voivode.deaths > DeathsCompartments.LOW &&
        voivode.deaths <= DeathsCompartments.MIDDLE) voivodeFaces[i].eyes = eyes2;
      else voivodeFaces[i].eyes = eyes3;
    });
  }
}

const generateMouth = () => {
  if (chernoffFace.mouth === DataParts.POPULATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.population <= PopulationCompartments.LOW) voivodeFaces[i].mouth = mouth1;
      else if (voivode.population > PopulationCompartments.LOW &&
        voivode.population <= PopulationCompartments.MIDDLE) voivodeFaces[i].mouth = mouth2;
      else voivodeFaces[i].mouth = mouth3;
    });
  } else if (chernoffFace.mouth === DataParts.MIGRATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.migration <= MigrationCompartments.LOW) voivodeFaces[i].mouth = mouth1;
      else if (voivode.migration > MigrationCompartments.LOW &&
        voivode.migration <= MigrationCompartments.MIDDLE) voivodeFaces[i].mouth = mouth2;
      else voivodeFaces[i].mouth = mouth3;
    });
  }
  else if (chernoffFace.mouth === DataParts.MARRIAGES) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.marriages <= MarriageCompartments.LOW) voivodeFaces[i].mouth = mouth1;
      else if (voivode.marriages > MarriageCompartments.LOW &&
        voivode.marriages <= MarriageCompartments.MIDDLE) voivodeFaces[i].mouth = mouth2;
      else voivodeFaces[i].mouth = mouth3;
    });
  }
  else if (chernoffFace.mouth === DataParts.BORN) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.born <= BornCompartments.LOW) voivodeFaces[i].mouth = mouth1;
      else if (voivode.born > BornCompartments.LOW &&
        voivode.born <= BornCompartments.MIDDLE) voivodeFaces[i].mouth = mouth2;
      else voivodeFaces[i].mouth = mouth3;
    });
  }
  else if (chernoffFace.mouth === DataParts.DEATHS) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.deaths <= DeathsCompartments.LOW) voivodeFaces[i].mouth = mouth1;
      else if (voivode.deaths > DeathsCompartments.LOW &&
        voivode.deaths <= DeathsCompartments.MIDDLE) voivodeFaces[i].eyes = mouth2;
      else voivodeFaces[i].mouth = mouth3;
    });
  }
}

const generateNose = () => {
  if (chernoffFace.nose === DataParts.POPULATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.population <= PopulationCompartments.LOW) voivodeFaces[i].nose = nose1;
      else if (voivode.population > PopulationCompartments.LOW &&
        voivode.population <= PopulationCompartments.MIDDLE) voivodeFaces[i].nose = nose2;
      else voivodeFaces[i].nose = nose3;
    });
  } else if (chernoffFace.nose === DataParts.MIGRATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.migration <= MigrationCompartments.LOW) voivodeFaces[i].nose = nose1;
      else if (voivode.migration > MigrationCompartments.LOW &&
        voivode.migration <= MigrationCompartments.MIDDLE) voivodeFaces[i].nose = nose2;
      else voivodeFaces[i].nose = nose3;
    });
  }
  else if (chernoffFace.nose === DataParts.MARRIAGES) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.marriages <= MarriageCompartments.LOW) voivodeFaces[i].nose = nose1;
      else if (voivode.marriages > MarriageCompartments.LOW &&
        voivode.marriages <= MarriageCompartments.MIDDLE) voivodeFaces[i].nose = nose2;
      else voivodeFaces[i].nose = nose3;
    });
  }
  else if (chernoffFace.nose === DataParts.BORN) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.born <= BornCompartments.LOW) voivodeFaces[i].nose = nose1;
      else if (voivode.born > BornCompartments.LOW &&
        voivode.born <= BornCompartments.MIDDLE) voivodeFaces[i].nose = nose2;
      else voivodeFaces[i].nose = nose3;
    });
  }
  else if (chernoffFace.nose === DataParts.DEATHS) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.deaths <= DeathsCompartments.LOW) voivodeFaces[i].nose = nose1;
      else if (voivode.deaths > DeathsCompartments.LOW &&
        voivode.deaths <= DeathsCompartments.MIDDLE) voivodeFaces[i].nose = nose2;
      else voivodeFaces[i].nose = nose3;
    });
  }
}

const generateEyebrows = () => {
  if (chernoffFace.eyebrows === DataParts.POPULATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.population <= PopulationCompartments.LOW) voivodeFaces[i].eyebrows = eyebrows1;
      else if (voivode.population > PopulationCompartments.LOW &&
        voivode.population <= PopulationCompartments.MIDDLE) voivodeFaces[i].eyebrows = eyebrows2;
      else voivodeFaces[i].eyebrows = eyebrows3;
    });
  } else if (chernoffFace.eyebrows === DataParts.MIGRATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.migration <= MigrationCompartments.LOW) voivodeFaces[i].eyebrows = eyebrows1;
      else if (voivode.migration > MigrationCompartments.LOW &&
        voivode.migration <= MigrationCompartments.MIDDLE) voivodeFaces[i].eyebrows = eyebrows2;
      else voivodeFaces[i].eyebrows = eyebrows3;
    });
  }
  else if (chernoffFace.eyebrows === DataParts.MARRIAGES) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.marriages <= MarriageCompartments.LOW) voivodeFaces[i].eyebrows = eyebrows1;
      else if (voivode.marriages > MarriageCompartments.LOW &&
        voivode.marriages <= MarriageCompartments.MIDDLE) voivodeFaces[i].eyebrows = eyebrows2;
      else voivodeFaces[i].eyebrows = eyebrows3;
    });
  }
  else if (chernoffFace.eyebrows === DataParts.BORN) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.born <= BornCompartments.LOW) voivodeFaces[i].eyebrows = eyebrows1;
      else if (voivode.born > BornCompartments.LOW &&
        voivode.born <= BornCompartments.MIDDLE) voivodeFaces[i].eyebrows = eyebrows2;
      else voivodeFaces[i].eyebrows = eyebrows3;
    });
  }
  else if (chernoffFace.eyebrows === DataParts.DEATHS) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.deaths <= DeathsCompartments.LOW) voivodeFaces[i].eyebrows = eyebrows1;
      else if (voivode.deaths > DeathsCompartments.LOW &&
        voivode.deaths <= DeathsCompartments.MIDDLE) voivodeFaces[i].eyebrows = eyebrows2;
      else voivodeFaces[i].eyebrows = eyebrows3;
    });
  }
}

const generateHead = () => {
  if (chernoffFace.head === DataParts.POPULATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.population <= PopulationCompartments.LOW) voivodeFaces[i].head = head1;
      else if (voivode.population > PopulationCompartments.LOW &&
        voivode.population <= PopulationCompartments.MIDDLE) voivodeFaces[i].head = head2;
      else voivodeFaces[i].head = head3;
    });
  } else if (chernoffFace.head === DataParts.MIGRATION) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.migration <= MigrationCompartments.LOW) voivodeFaces[i].head = head1;
      else if (voivode.migration > MigrationCompartments.LOW &&
        voivode.migration <= MigrationCompartments.MIDDLE) voivodeFaces[i].head = head2;
      else voivodeFaces[i].head = head3;
    });
  }
  else if (chernoffFace.head === DataParts.MARRIAGES) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.marriages <= MarriageCompartments.LOW) voivodeFaces[i].head = head1;
      else if (voivode.marriages > MarriageCompartments.LOW &&
        voivode.marriages <= MarriageCompartments.MIDDLE) voivodeFaces[i].head = head2;
      else voivodeFaces[i].head = head3;
    });
  }
  else if (chernoffFace.head === DataParts.BORN) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.born <= BornCompartments.LOW) voivodeFaces[i].head = head1;
      else if (voivode.born > BornCompartments.LOW &&
        voivode.born <= BornCompartments.MIDDLE) voivodeFaces[i].head = head2;
      else voivodeFaces[i].head = head3;
    });
  }
  else if (chernoffFace.head === DataParts.DEATHS) {
    voivodesipsData.forEach((voivode, i) => {
      if (voivode.deaths <= DeathsCompartments.LOW) voivodeFaces[i].head = head1;
      else if (voivode.deaths > DeathsCompartments.LOW &&
        voivode.deaths <= DeathsCompartments.MIDDLE) voivodeFaces[i].head = head2;
      else voivodeFaces[i].head = head3;
    });
  }
}

const setFacePart = (e: Event, part: FacePart) => {
  const select = e.target as HTMLSelectElement;
  if (part === FacePart.EYES) chernoffFace.eyes = Number(select.value);
  else if (part === FacePart.MOUTH) chernoffFace.mouth = Number(select.value);
  else if (part === FacePart.NOSE) chernoffFace.nose = Number(select.value);
  else if (part === FacePart.EYEBROWS) chernoffFace.eyebrows = Number(select.value);
  else if (part === FacePart.HEAD) chernoffFace.head = Number(select.value);
}



onMounted(() => {
  voivodesipsData.forEach(voivode => {
    voivodeFaces.push({
      id: voivode.id,
      name: voivode.name,
      eyes: null,
      mouth: null,
      nose: null,
      eyebrows: null,
      head: null
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
          <label for="eyebrows">Brwi:</label>
          <select v-on:change="(e) => setFacePart(e, FacePart.EYEBROWS)" id="eyebrows" name="eyebrows">
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
      <div class="chernoffFace">
        <img v-bind:src="voivodeFaces[7]?.eyes" alt="">
        <img v-bind:src="voivodeFaces[7]?.mouth" alt="">
        <img v-bind:src="voivodeFaces[7]?.nose" alt="">
        <img v-bind:src="voivodeFaces[7]?.eyebrows" alt="">
        <img v-bind:src="voivodeFaces[7]?.head" alt="">
      </div>

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

  .chernoffFace {
    position: relative;

    img {
      position: absolute;
      top: -100px;
      left: 100px;
    }
  }

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