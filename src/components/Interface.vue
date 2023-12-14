<script setup lang="ts">

import { useAppStore } from '../stores/app';
import { onMounted, reactive } from 'vue';

import { DataParts } from './../ts/enums';
import { Stats } from './../ts/types';
import { VoivodeshipJSON } from './../ts/interfaces.ts';

import SelectInput from './reusable/SelectInput.vue';

import voivodeshipsJSON from './../data/voivodeships.json';
import polandJSON from './../data/poland.json';

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

const appStore = useAppStore();
const { chernoffFace, voivodeshipsData, voivodeshipsStats, isFacesGenerated, polandCompartments, voivodeshipQuantiles } = appStore;

const voivodeshipsAverages = reactive<Stats[]>([]);
const voivodeshipsMedians = reactive<Stats[]>([]);
const voivodeshipsMin = reactive<Stats[]>([]);
const voivodeshipsMax = reactive<Stats[]>([]);
const polandAverages = reactive({
  population: 0,
  internalMigration: 0,
  externalMigration: 0,
  births: 0,
  deaths: 0
});

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
    polandCompartments.eyes.lower = Math.floor(polandAverages.population * 0.33);
    polandCompartments.eyes.upper = Math.floor(polandAverages.population * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].population <= polandCompartments.eyes.lower) voivodeshipsData[i].face.eyes = eyes1;
      else if (voivodeshipsAverages[i].population <= polandCompartments.eyes.upper) voivodeshipsData[i].face.eyes = eyes2;
      else voivodeshipsData[i].face.eyes = eyes3;
    }
  } else if (chernoffFace.eyes === DataParts.INTERNAL_MIGRATION) {
    // polandCompartments.eyes.lower = Math.floor(polandAverages.internalMigration * 0.33);
    // polandCompartments.eyes.upper = Math.floor(polandAverages.internalMigration * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      polandCompartments.eyes.lower = Math.floor(voivodeshipsMin[i].internalMigration + 0.33 * (voivodeshipsMax[i].internalMigration - voivodeshipsMin[i].internalMigration));
      polandCompartments.eyes.upper = Math.floor(voivodeshipsMin[i].internalMigration + 0.66 * (voivodeshipsMax[i].internalMigration - voivodeshipsMin[i].internalMigration));
      if (voivodeshipsAverages[i].internalMigration <= polandCompartments.eyes.lower) voivodeshipsData[i].face.eyes = eyes1;
      else if (voivodeshipsAverages[i].internalMigration <= polandCompartments.eyes.upper) voivodeshipsData[i].face.eyes = eyes2;
      else voivodeshipsData[i].face.eyes = eyes3;
    }
  } else if (chernoffFace.eyes === DataParts.EXTERNAL_MIGRATION) {
    polandCompartments.eyes.lower = Math.floor(polandAverages.externalMigration * 0.33);
    polandCompartments.eyes.upper = Math.floor(polandAverages.externalMigration * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].externalMigration <= polandCompartments.eyes.lower) voivodeshipsData[i].face.eyes = eyes1;
      else if (voivodeshipsAverages[i].externalMigration <= polandCompartments.eyes.upper) voivodeshipsData[i].face.eyes = eyes2;
      else voivodeshipsData[i].face.eyes = eyes3;
    }
  } else if (chernoffFace.eyes === DataParts.BIRTHS) {
    polandCompartments.eyes.lower = Math.floor(polandAverages.births * 0.33);
    polandCompartments.eyes.upper = Math.floor(polandAverages.births * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].births <= polandCompartments.eyes.lower) voivodeshipsData[i].face.eyes = eyes1;
      else if (voivodeshipsAverages[i].births <= polandCompartments.eyes.upper) voivodeshipsData[i].face.eyes = eyes2;
      else voivodeshipsData[i].face.eyes = eyes3;
    }
  } else if (chernoffFace.eyes === DataParts.DEATHS) {
    polandCompartments.eyes.lower = Math.floor(polandAverages.deaths * 0.33);
    polandCompartments.eyes.upper = Math.floor(polandAverages.deaths * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].deaths <= polandCompartments.eyes.lower) voivodeshipsData[i].face.eyes = eyes1;
      else if (voivodeshipsAverages[i].deaths <= polandCompartments.eyes.upper) voivodeshipsData[i].face.eyes = eyes2;
      else voivodeshipsData[i].face.eyes = eyes3;
    }
  }
}

const generateMouth = () => {
  if (chernoffFace.mouth === DataParts.POPULATION) {
    polandCompartments.mouth.lower = Math.floor(polandAverages.population * 0.33);
    polandCompartments.mouth.upper = Math.floor(polandAverages.population * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].population <= polandCompartments.mouth.lower) voivodeshipsData[i].face.mouth = mouth1;
      else if (voivodeshipsAverages[i].population <= polandCompartments.mouth.upper) voivodeshipsData[i].face.mouth = mouth2;
      else voivodeshipsData[i].face.mouth = mouth3;
    }
  } else if (chernoffFace.mouth === DataParts.INTERNAL_MIGRATION) {
    // polandCompartments.mouth.lower = Math.floor(polandAverages.internalMigration * 0.33);
    // polandCompartments.mouth.upper = Math.floor(polandAverages.internalMigration * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      polandCompartments.mouth.lower = Math.floor(voivodeshipsMin[i].internalMigration + 0.33 * (voivodeshipsMax[i].internalMigration - voivodeshipsMin[i].internalMigration));
      polandCompartments.mouth.upper = Math.floor(voivodeshipsMin[i].internalMigration + 0.66 * (voivodeshipsMax[i].internalMigration - voivodeshipsMin[i].internalMigration));
      if (voivodeshipsAverages[i].internalMigration <= polandCompartments.mouth.lower) voivodeshipsData[i].face.mouth = mouth1;
      else if (voivodeshipsAverages[i].internalMigration <= polandCompartments.mouth.upper) voivodeshipsData[i].face.mouth = mouth2;
      else voivodeshipsData[i].face.mouth = mouth3;
    }
  } else if (chernoffFace.mouth === DataParts.EXTERNAL_MIGRATION) {
    polandCompartments.mouth.lower = Math.floor(polandAverages.externalMigration * 0.33);
    polandCompartments.mouth.upper = Math.floor(polandAverages.externalMigration * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].externalMigration <= polandCompartments.mouth.lower) voivodeshipsData[i].face.mouth = mouth1;
      else if (voivodeshipsAverages[i].externalMigration <= polandCompartments.mouth.upper) voivodeshipsData[i].face.mouth = mouth2;
      else voivodeshipsData[i].face.mouth = mouth3;
    }
  } else if (chernoffFace.mouth === DataParts.BIRTHS) {
    polandCompartments.mouth.lower = Math.floor(polandAverages.births * 0.33);
    polandCompartments.mouth.upper = Math.floor(polandAverages.births * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].births <= polandCompartments.mouth.lower) voivodeshipsData[i].face.mouth = mouth1;
      else if (voivodeshipsAverages[i].births <= polandCompartments.mouth.upper) voivodeshipsData[i].face.mouth = mouth2;
      else voivodeshipsData[i].face.mouth = mouth3;
    }
  } else if (chernoffFace.mouth === DataParts.DEATHS) {
    polandCompartments.mouth.lower = Math.floor(polandAverages.deaths * 0.33);
    polandCompartments.mouth.upper = Math.floor(polandAverages.deaths * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].deaths <= polandCompartments.mouth.lower) voivodeshipsData[i].face.mouth = mouth1;
      else if (voivodeshipsAverages[i].deaths <= polandCompartments.mouth.upper) voivodeshipsData[i].face.mouth = mouth2;
      else voivodeshipsData[i].face.mouth = mouth3;
    }
  }
}

const generateNose = () => {
  if (chernoffFace.nose === DataParts.POPULATION) {
    polandCompartments.nose.lower = Math.floor(polandAverages.population * 0.33);
    polandCompartments.nose.upper = Math.floor(polandAverages.population * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].population <= polandCompartments.nose.lower) voivodeshipsData[i].face.nose = nose1;
      else if (voivodeshipsAverages[i].population <= polandCompartments.nose.upper) voivodeshipsData[i].face.nose = nose2;
      else voivodeshipsData[i].face.nose = nose3;
    }
  } else if (chernoffFace.nose === DataParts.INTERNAL_MIGRATION) {
    // polandCompartments.nose.lower = Math.floor(polandAverages.internalMigration * 0.33);
    // polandCompartments.nose.upper = Math.floor(polandAverages.internalMigration * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      polandCompartments.nose.lower = Math.floor(voivodeshipsMin[i].internalMigration + 0.33 * (voivodeshipsMax[i].internalMigration - voivodeshipsMin[i].internalMigration));
      polandCompartments.nose.upper = Math.floor(voivodeshipsMin[i].internalMigration + 0.66 * (voivodeshipsMax[i].internalMigration - voivodeshipsMin[i].internalMigration));
      if (voivodeshipsAverages[i].internalMigration <= polandCompartments.nose.lower) voivodeshipsData[i].face.nose = nose1;
      else if (voivodeshipsAverages[i].internalMigration <= polandCompartments.nose.upper) voivodeshipsData[i].face.nose = nose2;
      else voivodeshipsData[i].face.nose = nose3;
    }
  } else if (chernoffFace.nose === DataParts.EXTERNAL_MIGRATION) {
    polandCompartments.nose.lower = Math.floor(polandAverages.externalMigration * 0.33);
    polandCompartments.nose.upper = Math.floor(polandAverages.externalMigration * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].externalMigration <= polandCompartments.nose.lower) voivodeshipsData[i].face.nose = nose1;
      else if (voivodeshipsAverages[i].externalMigration <= polandCompartments.nose.upper) voivodeshipsData[i].face.nose = nose2;
      else voivodeshipsData[i].face.nose = nose3;
    }
  } else if (chernoffFace.nose === DataParts.BIRTHS) {
    polandCompartments.nose.lower = Math.floor(polandAverages.births * 0.33);
    polandCompartments.nose.upper = Math.floor(polandAverages.births * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].births <= polandCompartments.nose.lower) voivodeshipsData[i].face.nose = nose1;
      else if (voivodeshipsAverages[i].births <= polandCompartments.nose.upper) voivodeshipsData[i].face.nose = nose2;
      else voivodeshipsData[i].face.nose = nose3;
    }
  } else if (chernoffFace.nose === DataParts.DEATHS) {
    polandCompartments.nose.lower = Math.floor(polandAverages.deaths * 0.33);
    polandCompartments.nose.upper = Math.floor(polandAverages.deaths * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].deaths <= polandCompartments.nose.lower) voivodeshipsData[i].face.nose = nose1;
      else if (voivodeshipsAverages[i].deaths <= polandCompartments.nose.upper) voivodeshipsData[i].face.nose = nose2;
      else voivodeshipsData[i].face.nose = nose3;
    }
  }
}

const generateHair = () => {
  if (chernoffFace.hair === DataParts.POPULATION) {
    polandCompartments.hair.lower = Math.floor(polandAverages.population * 0.33);
    polandCompartments.hair.upper = Math.floor(polandAverages.population * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].population <= polandCompartments.hair.lower) voivodeshipsData[i].face.hair = hair1;
      else if (voivodeshipsAverages[i].population <= polandCompartments.hair.upper) voivodeshipsData[i].face.hair = hair2;
      else voivodeshipsData[i].face.hair = hair3;
    }
  } else if (chernoffFace.hair === DataParts.INTERNAL_MIGRATION) {
    // polandCompartments.hair.lower = Math.floor(polandAverages.internalMigration * 0.33);
    // polandCompartments.hair.upper = Math.floor(polandAverages.internalMigration * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      polandCompartments.hair.lower = Math.floor(voivodeshipsMin[i].internalMigration + 0.33 * (voivodeshipsMax[i].internalMigration - voivodeshipsMin[i].internalMigration));
      polandCompartments.hair.upper = Math.floor(voivodeshipsMin[i].internalMigration + 0.66 * (voivodeshipsMax[i].internalMigration - voivodeshipsMin[i].internalMigration));
      if (voivodeshipsAverages[i].internalMigration <= polandCompartments.hair.lower) voivodeshipsData[i].face.hair = hair1;
      else if (voivodeshipsAverages[i].internalMigration <= polandCompartments.hair.upper) voivodeshipsData[i].face.hair = hair2;
      else voivodeshipsData[i].face.hair = hair3;
    }
  } else if (chernoffFace.hair === DataParts.EXTERNAL_MIGRATION) {
    polandCompartments.hair.lower = Math.floor(polandAverages.externalMigration * 0.33);
    polandCompartments.hair.upper = Math.floor(polandAverages.externalMigration * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].externalMigration <= polandCompartments.hair.lower) voivodeshipsData[i].face.hair = hair1;
      else if (voivodeshipsAverages[i].externalMigration <= polandCompartments.hair.upper) voivodeshipsData[i].face.hair = hair2;
      else voivodeshipsData[i].face.hair = hair3;
    }
  } else if (chernoffFace.hair === DataParts.BIRTHS) {
    polandCompartments.hair.lower = Math.floor(polandAverages.births * 0.33);
    polandCompartments.hair.upper = Math.floor(polandAverages.births * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].births <= polandCompartments.hair.lower) voivodeshipsData[i].face.hair = hair1;
      else if (voivodeshipsAverages[i].births <= polandCompartments.hair.upper) voivodeshipsData[i].face.hair = hair2;
      else voivodeshipsData[i].face.hair = hair3;
    }
  } else if (chernoffFace.hair === DataParts.DEATHS) {
    polandCompartments.hair.lower = Math.floor(polandAverages.deaths * 0.33);
    polandCompartments.hair.upper = Math.floor(polandAverages.deaths * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].deaths <= polandCompartments.hair.lower) voivodeshipsData[i].face.hair = hair1;
      else if (voivodeshipsAverages[i].deaths <= polandCompartments.hair.upper) voivodeshipsData[i].face.hair = hair2;
      else voivodeshipsData[i].face.hair = hair3;
    }
  }
}

const generateHead = () => {
  if (chernoffFace.head === DataParts.POPULATION) {
    polandCompartments.head.lower = Math.floor(polandAverages.population * 0.33);
    polandCompartments.head.upper = Math.floor(polandAverages.population * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].population <= polandCompartments.head.lower) voivodeshipsData[i].face.head = head1;
      else if (voivodeshipsAverages[i].population <= polandCompartments.hair.upper) voivodeshipsData[i].face.head = head2;
      else voivodeshipsData[i].face.head = head3;
    }
  } else if (chernoffFace.head === DataParts.INTERNAL_MIGRATION) {
    // polandCompartments.head.lower = Math.floor(polandAverages.internalMigration * 0.33);
    // polandCompartments.head.upper = Math.floor(polandAverages.internalMigration * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      polandCompartments.head.lower = Math.floor(voivodeshipsMin[i].internalMigration + 0.33 * (voivodeshipsMax[i].internalMigration - voivodeshipsMin[i].internalMigration));
      polandCompartments.head.upper = Math.floor(voivodeshipsMin[i].internalMigration + 0.66 * (voivodeshipsMax[i].internalMigration - voivodeshipsMin[i].internalMigration));
      if (voivodeshipsAverages[i].internalMigration <= polandCompartments.head.lower) voivodeshipsData[i].face.head = head1;
      else if (voivodeshipsAverages[i].internalMigration <= polandCompartments.hair.upper) voivodeshipsData[i].face.head = head2;
      else voivodeshipsData[i].face.head = head3;
    }
  } else if (chernoffFace.head === DataParts.EXTERNAL_MIGRATION) {
    polandCompartments.head.lower = Math.floor(polandAverages.externalMigration * 0.33);
    polandCompartments.head.upper = Math.floor(polandAverages.externalMigration * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].externalMigration <= polandCompartments.head.lower) voivodeshipsData[i].face.head = head1;
      else if (voivodeshipsAverages[i].externalMigration <= polandCompartments.hair.upper) voivodeshipsData[i].face.head = head2;
      else voivodeshipsData[i].face.head = head3;
    }
  } else if (chernoffFace.head === DataParts.BIRTHS) {
    polandCompartments.head.lower = Math.floor(polandAverages.births * 0.33);
    polandCompartments.head.upper = Math.floor(polandAverages.births * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].births <= polandCompartments.head.lower) voivodeshipsData[i].face.head = head1;
      else if (voivodeshipsAverages[i].births <= polandCompartments.hair.upper) voivodeshipsData[i].face.head = head2;
      else voivodeshipsData[i].face.head = head3;
    }
  } else if (chernoffFace.head === DataParts.DEATHS) {
    polandCompartments.head.lower = Math.floor(polandAverages.deaths * 0.33);
    polandCompartments.head.upper = Math.floor(polandAverages.deaths * 0.66);
    for (let i = 0; i < voivodeshipsJSON.length; i++) {
      if (voivodeshipsAverages[i].deaths <= polandCompartments.head.lower) voivodeshipsData[i].face.head = head1;
      else if (voivodeshipsAverages[i].deaths <= polandCompartments.hair.upper) voivodeshipsData[i].face.head = head2;
      else voivodeshipsData[i].face.head = head3;
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

const calculatePolandAverage = () => {
  let polandSum = {
    population: 0,
    internalMigration: 0,
    externalMigration: 0,
    births: 0,
    deaths: 0
  }

  polandJSON.population.forEach(population => polandSum.population += population);
  polandJSON.internalMigration.forEach(internalMigration => polandSum.internalMigration += internalMigration);
  polandJSON.externalMigration.forEach(externalMigration => polandSum.externalMigration += externalMigration);
  polandJSON.births.forEach(births => polandSum.births += births);
  polandJSON.deaths.forEach(deaths => polandSum.deaths += deaths);

  polandAverages.population = Number((polandSum.population / polandJSON.population.length / voivodeshipsJSON.length).toFixed());
  polandAverages.internalMigration = Number((polandSum.internalMigration / polandJSON.internalMigration.length / voivodeshipsJSON.length).toFixed());
  polandAverages.externalMigration = Number((polandSum.externalMigration / polandJSON.externalMigration.length / voivodeshipsJSON.length).toFixed());
  polandAverages.births = Number((polandSum.births / polandJSON.births.length / voivodeshipsJSON.length).toFixed());
  polandAverages.deaths = Number((polandSum.deaths / polandJSON.deaths.length / voivodeshipsJSON.length).toFixed());
}

const calculateAverage = (voivodeship: VoivodeshipJSON) => {
  let voivodeshipSum = {
    population: 0,
    internalMigration: 0,
    externalMigration: 0,
    births: 0,
    deaths: 0
  }
  voivodeship.population.forEach(population => voivodeshipSum.population += population);
  voivodeship.internalMigration.forEach(internalMigration => voivodeshipSum.internalMigration += internalMigration);
  voivodeship.externalMigration.forEach(externalMigration => voivodeshipSum.externalMigration += externalMigration);
  voivodeship.births.forEach(births => voivodeshipSum.births += births);
  voivodeship.deaths.forEach(deaths => voivodeshipSum.deaths += deaths);

  voivodeshipsAverages.push({
    population: Number((voivodeshipSum.population / voivodeship.population.length).toFixed()),
    internalMigration: Number((voivodeshipSum.internalMigration / voivodeship.internalMigration.length).toFixed()),
    externalMigration: Number((voivodeshipSum.externalMigration / voivodeship.externalMigration.length).toFixed()),
    births: Number((voivodeshipSum.births / voivodeship.births.length).toFixed()),
    deaths: Number((voivodeshipSum.deaths / voivodeship.deaths.length).toFixed())
  });
}

const calculateMedian = (voivodeship: VoivodeshipJSON) => {
  voivodeshipsMedians.push({
    population: (voivodeship.population[14] + voivodeship.population[15]) / 2,
    internalMigration: (voivodeship.internalMigration[14] + voivodeship.internalMigration[15]) / 2,
    externalMigration: (voivodeship.externalMigration[14] + voivodeship.externalMigration[15]) / 2,
    births: (voivodeship.births[14] + voivodeship.births[15]) / 2,
    deaths: (voivodeship.deaths[14] + voivodeship.deaths[15]) / 2,
  });
}

const calculateMin = (voivodeship: VoivodeshipJSON) => {
  voivodeshipsMin.push({
    population: Math.min(...voivodeship.population),
    internalMigration: Math.min(...voivodeship.internalMigration),
    externalMigration: Math.min(...voivodeship.externalMigration),
    births: Math.min(...voivodeship.births),
    deaths: Math.min(...voivodeship.deaths)
  });
}

const calculateMax = (voivodeship: VoivodeshipJSON) => {
  voivodeshipsMax.push({
    population: Math.max(...voivodeship.population),
    internalMigration: Math.max(...voivodeship.internalMigration),
    externalMigration: Math.max(...voivodeship.externalMigration),
    births: Math.max(...voivodeship.births),
    deaths: Math.max(...voivodeship.deaths)
  });
}

const calculateQuantile = (voivodeship: VoivodeshipJSON) => {

  const sortedPopulation = voivodeship.population.slice().sort((a, b) => a - b);
  const sortedInternalMigration = voivodeship.internalMigration.slice().sort((a, b) => a - b);
  const sortedExternalMigration = voivodeship.externalMigration.slice().sort((a, b) => a - b);
  const sortedBirths = voivodeship.births.slice().sort((a, b) => a - b);
  const sortedDeaths = voivodeship.deaths.slice().sort((a, b) => a - b);

  const percentile = (data: number[], percentile: number): number => {
    const index = Math.ceil((percentile / 100) * data.length) - 1;
    return data[index];
  }

  voivodeshipQuantiles.push({
    population: {
      q1: percentile(sortedPopulation, 25),
      q2: (voivodeship.population[14] + voivodeship.population[15]) / 2,
      q3: percentile(sortedPopulation, 75)
    },
    internalMigration: {
      q1: percentile(sortedInternalMigration, 25),
      q2: (voivodeship.internalMigration[14] + voivodeship.internalMigration[15]) / 2,
      q3: percentile(sortedInternalMigration, 75)
    },
    externalMigration: {
      q1: percentile(sortedExternalMigration, 25),
      q2: (voivodeship.externalMigration[14] + voivodeship.externalMigration[15]) / 2,
      q3: percentile(sortedExternalMigration, 75)
    },
    births: {
      q1: percentile(sortedBirths, 25),
      q2: (voivodeship.births[14] + voivodeship.births[15]) / 2,
      q3: percentile(sortedBirths, 75)
    },
    deaths: {
      q1: percentile(sortedDeaths, 25),
      q2: (voivodeship.deaths[14] + voivodeship.deaths[15]) / 2,
      q3: percentile(sortedDeaths, 75)
    },
  });
}

onMounted(() => {
  calculatePolandAverage();
  voivodeshipsJSON.forEach(voivodeship => {
    calculateAverage(voivodeship);
    calculateMedian(voivodeship);
    calculateMin(voivodeship);
    calculateMax(voivodeship);
    calculateQuantile(voivodeship);
    voivodeshipsData.push({
      id: voivodeship.id,
      symbol: voivodeship.symbol,
      name: voivodeship.name,
      points: voivodeship.points,
      face: {
        head: null,
        hair: null,
        eyes: null,
        mouth: null,
        nose: null,
      }
    });
  });
  voivodeshipsStats.average = voivodeshipsAverages;
  voivodeshipsStats.median = voivodeshipsMedians;
  voivodeshipsStats.min = voivodeshipsMin;
  voivodeshipsStats.max = voivodeshipsMax;
});
</script>
<template>
  <section class="interface">
    <div class="configure-box">
      <h2>Skonfiguruj Twarze Chernoffa</h2>
      <form>
        <SelectInput selected="Populacja" id="eyes" title="Oczy" />
        <SelectInput selected="Migracje Wewnętrzne" id="mouth" title="Usta" />
        <SelectInput selected="Migracje Zagraniczne" id="nose" title="Nos" />
        <SelectInput selected="Urodzenia" id="hair" title="Włosy" />
        <SelectInput selected="Zgony" id="head" title="Głowa" />
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