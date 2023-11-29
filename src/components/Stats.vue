<script setup lang="ts">
import { watch } from 'vue';
import { useAppStore } from '../stores/app';
import { DataParts } from '../ts/enums';
import polandData from './../data/poland.json';
// import eyes1 from './../assets/img/faces/test/eyes1.png';
// import eyes2 from './../assets/img/faces/test/eyes2.png';
// import eyes3 from './../assets/img/faces/test/eyes3.png';

// import mouth1 from './../assets/img/faces/test/mouth1.png';
// import mouth2 from './../assets/img/faces/test/mouth2.png';
// import mouth3 from './../assets/img/faces/test/mouth3.png';

// import nose1 from './../assets/img/faces/test/nose1.png';
// import nose2 from './../assets/img/faces/test/nose2.png';
// import nose3 from './../assets/img/faces/test/nose3.png';

// import eyebrows1 from './../assets/img/faces/test/eyebrows1.png';
// import eyebrows2 from './../assets/img/faces/test/eyebrows2.png';
// import eyebrows3 from './../assets/img/faces/test/eyebrows3.png';

// import head1 from './../assets/img/faces/test/head1.png';
// import head2 from './../assets/img/faces/test/head2.png';
// import head3 from './../assets/img/faces/test/head3.png';

const appStore = useAppStore();
const { chernoffFace } = appStore;
watch(chernoffFace, () => {
  if (chernoffFace.eyes === DataParts.POPULATION) console.log('tak');
});
</script>
<template>
  <section class="stats">
    <div class="card">
      <h2>Populacja</h2>
      <p>W Polsce populacja oszacowana jest na <strong>{{ polandData.population }}</strong></p>
    </div>
    <div class="card">
      <h2>Migracja</h2>
      <p>Migracja w Polsce szacuje się na <strong>{{ polandData.migration }}</strong> osób</p>
    </div>
    <div class="card">
      <h2>Małżeństwa</h2>
      <p>W Polsce rocznie zawiera się średnio <strong>{{ polandData.marriages }}</strong> małżeństw.</p>
    </div>
    <div class="card">
      <h2>Urodzenia</h2>
      <p>W Polsce rocznie przychodzi na świat około <strong>{{ polandData.born }}</strong> dzieci.</p>
    </div>
    <div class="card">
      <h2>Zgony</h2>
      <p>W Polsce rocznie odnotowuje się średnio <strong>{{ polandData.deaths }}</strong> zgonów.</p>
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
      font-size: 3vmin;
      text-align: center;
      margin-bottom: 2vmin;
      padding-bottom: 1vmin;
      color: white;
      border-bottom: 2px solid white;
    }

    p {
      color: $bgColor;
      text-align: center;
      font-size: 2vmin;
      text-shadow: 1px 1px 0 $darkColor;

      strong {
        color: $secondaryColor;
        font-size: 2.2vmin;
      }
    }
  }

}
</style>