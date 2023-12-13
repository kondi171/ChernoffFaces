import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import { ChernoffFace } from './../ts/types';
import { PolandAverageCompartment, VoivodeshipData, VoivodeshipStats } from '../ts/interfaces';
import { DataParts, Stats } from '../ts/enums';

export const useAppStore = defineStore('app', () => {
  const index = reactive({
    value: 0
  });

  const year = reactive({
    value: 2031
  });

  const isChartVisible = reactive({
    value: false
  });

  const chartOptions = reactive({
    parameter: DataParts.POPULATION,
    function: Stats.AVERAGE
  });

  const setChartParameter = (statement: DataParts) => {
    chartOptions.parameter = statement;
  }
  const setChartFunction = (statement: Stats) => {
    chartOptions.function = statement;
  }

  const chernoffFace = reactive<ChernoffFace>({
    eyes: DataParts.POPULATION,
    mouth: DataParts.INTERNAL_MIGRATION,
    nose: DataParts.EXTERNAL_MIGRATION,
    hair: DataParts.BIRTHS,
    head: DataParts.DEATHS
  });

  const isFacesGenerated = reactive({
    generated: false
  });

  const voivodeshipsData = reactive<VoivodeshipData[]>([]);
  const voivodeshipsStats = reactive<VoivodeshipStats>({
    average: [],
    median: [],
    min: [],
    max: []
  });

  const polandCompartments = reactive({
    eyes: {
      lower: 0,
      upper: 0
    },
    mouth: {
      lower: 0,
      upper: 0
    },
    nose: {
      lower: 0,
      upper: 0
    },
    hair: {
      lower: 0,
      upper: 0
    },
    head: {
      lower: 0,
      upper: 0
    }
  });
  return {
    year,
    index,
    isChartVisible,
    chartOptions,
    setChartParameter,
    setChartFunction,
    chernoffFace,
    voivodeshipsData,
    voivodeshipsStats,
    isFacesGenerated,
    polandCompartments
  }
});
