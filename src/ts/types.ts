export type ChernoffFace = {
  eyes: string,
  mouth: string,
  nose: string,
  hair: string,
  head: string
}

export type VoivodeAverage = {
  population: number,
  internalMigration: number,
  externalMigration: number,
  births: number,
  deaths: number
}

export type Stats = {
  population: number,
  internalMigration: number,
  externalMigration: number,
  births: number,
  deaths: number
}

export type Compartment = {
  average: number,
  lowerCompartment: number,
  upperCompartment: number
}
