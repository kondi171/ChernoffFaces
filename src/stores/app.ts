import { ref, reactive } from 'vue';
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
  const voivodeFaces = reactive<VoivodeFace[]>([]);
  return {
    chernoffFace,
    voivodeFaces,
  }
});
