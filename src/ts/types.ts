export type ChernoffFace = {
  eyes: number,
  mouth: number,
  nose: number,
  hair: number,
  head: number
}

export type VoivodeFace = {
  id: number,
  symbol: string,
  name: string,
  points: string,
  population: number,
  migration: number,
  marriages: number,
  born: number,
  deaths: number,
  face: {
    eyes: string | null,
    mouth: string | null,
    nose: string | null,
    hair: string | null,
    head: string | null
  },
};