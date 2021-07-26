export interface WordCard {
  wordRU: string;
  image: string;
  wordEN: string;
}
export interface Result {
  wordRU: string;
  wordEN: string;
}

export enum Sizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum Colors {
  RED = 'red',
  BLACK = 'black',
}
