import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import { ChernoffFace, VoivodeFace } from './../ts/types';
import { DataParts } from '../ts/enums';
export const useAppStore = defineStore('app', () => {
  const chernoffFace = reactive<ChernoffFace>({
    eyes: DataParts.POPULATION,
    mouth: DataParts.MIGRATION,
    nose: DataParts.MARRIAGES,
    eyebrows: DataParts.BORN,
    head: DataParts.DEATHS
  });
  const voivodeFaces = reactive<VoivodeFace[]>([]);
  return {
    chernoffFace,
    voivodeFaces,
  }
});
