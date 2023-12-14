<script setup lang="ts">
import eyes1 from './../../assets/img/faces/eyes1.png';
import eyes2 from './../../assets/img/faces/eyes2.png';
import eyes3 from './../../assets/img/faces/eyes3.png';

import mouth1 from './../../assets/img/faces/mouth1.png';
import mouth2 from './../../assets/img/faces/mouth2.png';
import mouth3 from './../../assets/img/faces/mouth3.png';

import nose1 from './../../assets/img/faces/nose1.png';
import nose2 from './../../assets/img/faces/nose2.png';
import nose3 from './../../assets/img/faces/nose3.png';

import hair1 from './../../assets/img/faces/hair1.png';
import hair2 from './../../assets/img/faces/hair2.png';
import hair3 from './../../assets/img/faces/hair3.png';

import head1 from './../../assets/img/faces/head1.png';
import head2 from './../../assets/img/faces/head2.png';
import head3 from './../../assets/img/faces/head3.png';

import { DataParts } from './../../ts/enums';
import { useAppStore } from './../../stores/app';
import LegendPart from './../reusable/LegendPart.vue';


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
    <LegendPart @click="handleExpandData(DataParts.POPULATION)" :title="chernoffFace.eyes" name="Oczy"
      :part="DataParts.POPULATION" :img="[eyes1, eyes2, eyes3]"
      :data="[polandCompartments.eyes.lower, polandCompartments.eyes.upper]" />

    <LegendPart @click="handleExpandData(DataParts.INTERNAL_MIGRATION)" :title="chernoffFace.mouth" name="Usta"
      :part="DataParts.INTERNAL_MIGRATION" :img="[mouth1, mouth2, mouth3]"
      :data="[polandCompartments.mouth.lower, polandCompartments.mouth.upper]" />

    <LegendPart @click="handleExpandData(DataParts.EXTERNAL_MIGRATION)" :title="chernoffFace.nose" name="Nos"
      :part="DataParts.EXTERNAL_MIGRATION" :img="[nose1, nose2, nose3]"
      :data="[polandCompartments.nose.lower, polandCompartments.nose.upper]" />

    <LegendPart @click="handleExpandData(DataParts.BIRTHS)" :title="chernoffFace.hair" name="Włosy"
      :part="DataParts.BIRTHS" :img="[hair1, hair2, hair3]"
      :data="[polandCompartments.hair.lower, polandCompartments.hair.upper]" />

    <LegendPart @click="handleExpandData(DataParts.DEATHS)" :title="chernoffFace.head" name="Głowa"
      :part="DataParts.DEATHS" :img="[head1, head2, head3]"
      :data="[polandCompartments.head.lower, polandCompartments.head.upper]" />
  </section>
</template>

<style scoped lang="scss">
@import './../../assets/scss/variables.scss';

.legend {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  margin-top: 1vmin;

}
</style>


