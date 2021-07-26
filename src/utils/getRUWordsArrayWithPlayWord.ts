import { WordCard } from '../types/types';
import { getRandom } from './getRandom';
import { getRUWordsArr } from './getRUWordsArr';
import { getRandomArrayOfNumbersGivenSize } from './getRandomArrayOfNumbersGivenSize';

const getIndiciesArrayWithPlayWordIndex = (arrayOfIndices: Array<number>, playWordIndex: number): Array<number> => {
  if (!arrayOfIndices.includes(playWordIndex)) {
    const newIndex = getRandom(arrayOfIndices.length);
    arrayOfIndices.splice(newIndex, 1, playWordIndex);
  }
  return arrayOfIndices;
};

export const getAnswersArray = (originArray: Array<WordCard>, arrayOfIndices: Array<number>): Array<WordCard> =>
  arrayOfIndices.map((indexNumber) => originArray[indexNumber]);

export const getRUWordsArrayWithPlayWord = (
  originArray: Array<WordCard>,
  playWordIndex: number,
  answersCount: number,
): Array<string> => {
  const arrayOfIndices = getRandomArrayOfNumbersGivenSize(originArray.length, answersCount);
  getIndiciesArrayWithPlayWordIndex(arrayOfIndices, playWordIndex);
  const answersCard = getAnswersArray(originArray, arrayOfIndices);
  return getRUWordsArr(answersCard);
};
