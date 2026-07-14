export type Species = 'dog' | 'cat';

export interface Point {
  x: number;
  y: number;
}

export type MainPointKey = 'carina' | 'apex' | 'saStart' | 'saEnd' | 'laBorder';

export interface MainPoints {
  carina: Point | null;
  apex: Point | null;
  saStart: Point | null;
  saEnd: Point | null;
  laBorder: Point | null;
}

export type Step =
  | 'adjust'
  | 'carina'
  | 'apex'
  | 'shortAxis'
  | 'laBorder'
  | 'vertebrae'
  | 'done';

export interface HeartSizeResult {
  species: Species;
  vhs: number;
  vlas: number | null;
  lVertebrae: number;
  sVertebrae: number;
  vertebraCount: number;
  date: string;
}
