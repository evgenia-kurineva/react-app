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
  CLOSE = 'close',
}

export enum Colors {
  RED = 'red',
  BLACK = 'black',
}
