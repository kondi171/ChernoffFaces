<script setup lang="ts">
import { ref, watch } from 'vue';
import { Dataset } from './../../ts/types';
import { DataParts, Stats } from './../../ts/enums';
import { useAppStore } from './../../stores/app';
import Chart, { ChartItem } from 'chart.js/auto';

const appStore = useAppStore();
const { chartOptions } = appStore;

const { voivodeshipsNames, voivodeshipsDatasets } = defineProps(['voivodeshipsNames', 'voivodeshipsDatasets']);

const labels = voivodeshipsNames;
const backgroundColors = [
  '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
  '#008080', '#FFC0CB', '#8B4513', '#808080', '#800000', '#008000', '#000080', '#333333'
];
const hoverBackgroundColors = [
  '#BB0000', '#00BB00', '#0000BB', '#BBBB00', '#BB00BB', '#00BBBB', '#BB8300', '#700070',
  '#006060', '#DDC0CB', '#6B4513', '#505050', '#600000', '#006000', '#000060', '#444444'
];

const datasets: Dataset[] = [];
voivodeshipsDatasets.forEach((data: []) => {
  datasets.push({
    backgroundColor: backgroundColors,
    hoverBackgroundColor: hoverBackgroundColors,
    data: data,
  });
});

const selectedDatasetIndex = ref(0);

const data = {
  labels: labels,
  datasets: [datasets[selectedDatasetIndex.value]],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      callbacks: {
        label: (context: { formattedValue: string; }) => {
          const value = context.formattedValue || '';
          return ` ${value}`;
        },
      },
    },
  },
};
const config = {
  type: 'doughnut',
  data: data,
  options: options,
};

let myChart: Chart;

const checkChartSettings = () => {
  if (chartOptions.parameter === DataParts.POPULATION) {
    if (chartOptions.function === Stats.AVERAGE) selectedDatasetIndex.value = 0;
    else if (chartOptions.function === Stats.MEDIAN) selectedDatasetIndex.value = 1;
    else if (chartOptions.function === Stats.MIN) selectedDatasetIndex.value = 2;
    else if (chartOptions.function === Stats.MAX) selectedDatasetIndex.value = 3;
  } else if (chartOptions.parameter === DataParts.INTERNAL_MIGRATION) {
    if (chartOptions.function === Stats.AVERAGE) selectedDatasetIndex.value = 4;
    else if (chartOptions.function === Stats.MEDIAN) selectedDatasetIndex.value = 5;
    else if (chartOptions.function === Stats.MIN) selectedDatasetIndex.value = 6;
    else if (chartOptions.function === Stats.MAX) selectedDatasetIndex.value = 7;
  } else if (chartOptions.parameter === DataParts.EXTERNAL_MIGRATION) {
    if (chartOptions.function === Stats.AVERAGE) selectedDatasetIndex.value = 8;
    else if (chartOptions.function === Stats.MEDIAN) selectedDatasetIndex.value = 9;
    else if (chartOptions.function === Stats.MIN) selectedDatasetIndex.value = 10;
    else if (chartOptions.function === Stats.MAX) selectedDatasetIndex.value = 11;
  } else if (chartOptions.parameter === DataParts.BIRTHS) {
    if (chartOptions.function === Stats.AVERAGE) selectedDatasetIndex.value = 12;
    else if (chartOptions.function === Stats.MEDIAN) selectedDatasetIndex.value = 13;
    else if (chartOptions.function === Stats.MIN) selectedDatasetIndex.value = 14;
    else if (chartOptions.function === Stats.MAX) selectedDatasetIndex.value = 15;
  } else {
    if (chartOptions.function === Stats.AVERAGE) selectedDatasetIndex.value = 16;
    else if (chartOptions.function === Stats.MEDIAN) selectedDatasetIndex.value = 17;
    else if (chartOptions.function === Stats.MIN) selectedDatasetIndex.value = 18;
    else if (chartOptions.function === Stats.MAX) selectedDatasetIndex.value = 19;
  }
  switchDataset();
}

const switchDataset = () => {
  myChart.data.datasets = [datasets[selectedDatasetIndex.value]];
  myChart.update();
};

watch(voivodeshipsDatasets, () => {
  if (voivodeshipsDatasets.length !== 0) myChart = new Chart(<ChartItem>document.getElementById('myChart'), config);
});
watch(chartOptions, () => {
  checkChartSettings();
});

</script>

<template>
  <section class="chart">
    <canvas id="myChart"></canvas>
  </section>
</template>

<style scoped lang="scss">
@import './../../assets/scss/variables.scss';

.chart {
  width: 50vw;
}
</style>