import React from 'react';
import { useSelector } from 'react-redux';
import { quantityNotEnteredWords } from '../../features/wordForm/wordFormSlice';
import { WordCard } from '../../types/types';
import CounterIcon from '../CounterIcon/CounterIcon';
import WordForm from '../WordForm/WordForm';

type EnterWordProps = {
  cards: Array<WordCard>;
};

const EnterWord = ({ cards }: EnterWordProps): JSX.Element => {
  const wordsQuantity = useSelector(quantityNotEnteredWords);

  return (
    <>
      <h3>
        Введи <CounterIcon count={wordsQuantity} /> слов на русском языке.
      </h3>
      <WordForm cards={cards} />
    </>
  );
};

export default EnterWord;
