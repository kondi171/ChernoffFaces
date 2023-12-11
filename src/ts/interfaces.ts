import { Compartment, Stats } from "./types";

export interface VoivodeshipData {
  id: number,
  symbol: string,
  name: string,
  points: string,
  face: {
    eyes: string | null,
    mouth: string | null,
    nose: string | null,
    hair: string | null,
    head: string | null
  },
}

export interface VoivodeshipStats {
  average: Stats[],
  median: Stats[],
  min: Stats[],
  max: Stats[]
}

export interface VoivodeshipJSON {
  id: number,
  symbol: string,
  name: string,
  points: string,
  population: number[],
  internalMigration: number[],
  externalMigration: number[],
  births: number[],
  deaths: number[]
}

export interface PolandAverageCompartment {
  population: Compartment
  internalMigration: Compartment,
  externalMigration: Compartment,
  births: Compartment,
  deaths: Compartment
}