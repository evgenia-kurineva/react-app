import { getRandom } from './getRandom';

export const getRandomArrayOfNumbersGivenSize = (arrayLength: number, size: number): Array<number> => {
  const randomArray: Array<number> = [];
  while (size !== randomArray.length) {
    const newRandomArrayElement = getRandom(arrayLength);
    if (randomArray.includes(newRandomArrayElement)) {
      const index = randomArray.indexOf(newRandomArrayElement);
      randomArray.splice(index, 1);
    }
    randomArray.unshift(newRandomArrayElement);
  }
  return randomArray;
};
