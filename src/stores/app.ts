import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { ChernoffFace } from './../ts/types';
import { PolandAverageCompartment, VoivodeshipData, VoivodeshipStats } from '../ts/interfaces';
import { DataParts } from '../ts/enums';

export const useAppStore = defineStore('app', () => {
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
    chernoffFace,
    voivodeshipsData,
    voivodeshipsStats,
    isFacesGenerated,
    polandCompartments
  }
});
