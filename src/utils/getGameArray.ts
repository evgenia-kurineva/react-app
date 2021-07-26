import { WordCard } from '../types/types';
import { getRandomArrayOfNumbersGivenSize } from './getRandomArrayOfNumbersGivenSize';

export const getGameArray = (originArray: Array<WordCard>): Array<WordCard> => {
  const arrayOfIndices = getRandomArrayOfNumbersGivenSize(originArray.length, originArray.length);
  return arrayOfIndices.map((indexNumber) => originArray[indexNumber]);
};
