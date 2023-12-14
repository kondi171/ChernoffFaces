export type ChernoffFace = {
  eyes: string,
  mouth: string,
  nose: string,
  hair: string,
  head: string
}

export type Stats = {
  population: number,
  internalMigration: number,
  externalMigration: number,
  births: number,
  deaths: number
}

export type Quantiles = {
  q1: number,
  q2: number,
  q3: number
}

export type Compartment = {
  average: number,
  lowerCompartment: number,
  upperCompartment: number
}

export type Dataset = {
  backgroundColor: string[];
  hoverBackgroundColor: string[];
  data: number[];
};