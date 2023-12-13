<script setup lang="ts">

import { onMounted, ref } from 'vue';
import voivodeshipJSON from './../data/voivodeships.json';
import { useAppStore } from '../stores/app';
import Chart from './Chart.vue';
import Chart2 from './Chart2.vue';

const appStore = useAppStore();
const { voivodeshipsStats } = appStore;

const voivodeshipsNames = ref<string[]>([]);
const voivodeshipsPopulationAverage = ref<number[]>([]);
const voivodeshipsPopulationMedian = ref<number[]>([]);
const voivodeshipsPopulationMin = ref<number[]>([]);
const voivodeshipsPopulationMax = ref<number[]>([]);

const voivodeshipsInternalMigrationAverage = ref<number[]>([]);
const voivodeshipsInternalMigrationMedian = ref<number[]>([]);
const voivodeshipsInternalMigrationMin = ref<number[]>([]);
const voivodeshipsInternalMigrationMax = ref<number[]>([]);

const voivodeshipsExternalMigrationAverage = ref<number[]>([]);
const voivodeshipsExternalMigrationMedian = ref<number[]>([]);
const voivodeshipsExternalMigrationMin = ref<number[]>([]);
const voivodeshipsExternalMigrationMax = ref<number[]>([]);

const voivodeshipsBirthsAverage = ref<number[]>([]);
const voivodeshipsBirthsMedian = ref<number[]>([]);
const voivodeshipsBirthsMin = ref<number[]>([]);
const voivodeshipsBirthsMax = ref<number[]>([]);

const voivodeshipsDeathsAverage = ref<number[]>([]);
const voivodeshipsDeathsMedian = ref<number[]>([]);
const voivodeshipsDeathsMin = ref<number[]>([]);
const voivodeshipsDeathsMax = ref<number[]>([]);

const prepareData = () => {
  voivodeshipJSON.forEach(voivodeship => voivodeshipsNames.value.push(voivodeship.name));

  voivodeshipsStats.average.forEach((stat: { population: any; }) => voivodeshipsPopulationAverage.value.push(stat.population));
  voivodeshipsStats.median.forEach((stat: { population: any; }) => voivodeshipsPopulationMedian.value.push(stat.population));
  voivodeshipsStats.min.forEach((stat: { population: any; }) => voivodeshipsPopulationMin.value.push(stat.population));
  voivodeshipsStats.max.forEach((stat: { population: any; }) => voivodeshipsPopulationMax.value.push(stat.population));

  voivodeshipsStats.average.forEach((stat: { internalMigration: any; }) => voivodeshipsInternalMigrationAverage.value.push(stat.internalMigration));
  voivodeshipsStats.median.forEach((stat: { internalMigration: any; }) => voivodeshipsInternalMigrationMedian.value.push(stat.internalMigration));
  voivodeshipsStats.min.forEach((stat: { internalMigration: any; }) => voivodeshipsInternalMigrationMin.value.push(stat.internalMigration));
  voivodeshipsStats.max.forEach((stat: { internalMigration: any; }) => voivodeshipsInternalMigrationMax.value.push(stat.internalMigration));

  voivodeshipsStats.average.forEach((stat: { externalMigration: any; }) => voivodeshipsExternalMigrationAverage.value.push(stat.externalMigration));
  voivodeshipsStats.median.forEach((stat: { externalMigration: any; }) => voivodeshipsExternalMigrationMedian.value.push(stat.externalMigration));
  voivodeshipsStats.min.forEach((stat: { externalMigration: any; }) => voivodeshipsExternalMigrationMin.value.push(stat.externalMigration));
  voivodeshipsStats.max.forEach((stat: { externalMigration: any; }) => voivodeshipsExternalMigrationMax.value.push(stat.externalMigration));

  voivodeshipsStats.average.forEach((stat: { births: any; }) => voivodeshipsBirthsAverage.value.push(stat.births));
  voivodeshipsStats.median.forEach((stat: { births: any; }) => voivodeshipsBirthsMedian.value.push(stat.births));
  voivodeshipsStats.min.forEach((stat: { births: any; }) => voivodeshipsBirthsMin.value.push(stat.births));
  voivodeshipsStats.max.forEach((stat: { births: any; }) => voivodeshipsBirthsMax.value.push(stat.births));

  voivodeshipsStats.average.forEach((stat: { deaths: any; }) => voivodeshipsDeathsAverage.value.push(stat.deaths));
  voivodeshipsStats.median.forEach((stat: { deaths: any; }) => voivodeshipsDeathsMedian.value.push(stat.deaths));
  voivodeshipsStats.min.forEach((stat: { deaths: any; }) => voivodeshipsDeathsMin.value.push(stat.deaths));
  voivodeshipsStats.max.forEach((stat: { deaths: any; }) => voivodeshipsDeathsMax.value.push(stat.deaths));
}
onMounted(() => {
  prepareData();
});

</script>

<template>
  <Chart2 :voivodeshipsNames="voivodeshipsNames" :voivodeshipsDatasets="[
    voivodeshipsPopulationAverage,
    voivodeshipsPopulationMedian,
    voivodeshipsPopulationMin,
    voivodeshipsPopulationMax,

    voivodeshipsInternalMigrationAverage,
    voivodeshipsInternalMigrationMedian,
    voivodeshipsInternalMigrationMin,
    voivodeshipsInternalMigrationMax,

    voivodeshipsExternalMigrationAverage,
    voivodeshipsExternalMigrationMedian,
    voivodeshipsExternalMigrationMin,
    voivodeshipsExternalMigrationMax,

    voivodeshipsBirthsAverage,
    voivodeshipsBirthsMedian,
    voivodeshipsBirthsMin,
    voivodeshipsBirthsMax,

    voivodeshipsDeathsAverage,
    voivodeshipsDeathsMedian,
    voivodeshipsDeathsMin,
    voivodeshipsDeathsMax,
  ]" />
</template>

<style scoped lang="scss">
@import './../assets/scss/variables.scss';
</style>
