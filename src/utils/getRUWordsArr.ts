import { WordCard } from '../types/types';

export const getRUWordsArr = (arr: Array<WordCard>): Array<string> => arr.map((item) => item.wordRU);
