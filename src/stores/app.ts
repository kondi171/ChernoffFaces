import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { ChernoffFace, VoivodeFace, VoivodeAverage } from './../ts/types';
import { DataParts } from '../ts/enums';

export const useAppStore = defineStore('app', () => {
  const chernoffFace = reactive<ChernoffFace>({
    eyes: DataParts.POPULATION,
    mouth: DataParts.INTERNAL_MIGRATION,
    nose: DataParts.EXTERNAL_MIGRATION,
    hair: DataParts.BIRTH,
    head: DataParts.DEATHS
  });
  const isFacesGenerated = reactive({
    generated: false
  });
  const voivodeFaces = reactive<VoivodeFace[]>([]);
  const polandAverages = reactive<VoivodeAverage>({
    population: 0,
    internalMigration: 0,
    externalMigration: 0,
    birth: 0,
    deaths: 0
  });
  const polandCompartments = reactive({
    eyes: {
      first: 0,
      second: 0
    },
    mouth: {
      first: 0,
      second: 0
    },
    nose: {
      first: 0,
      second: 0
    },
    hair: {
      first: 0,
      second: 0
    },
    head: {
      first: 0,
      second: 0
    }
  });
  return {
    chernoffFace,
    voivodeFaces,
    isFacesGenerated,
    polandAverages,
    polandCompartments
  }
});
