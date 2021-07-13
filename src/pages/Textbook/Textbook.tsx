import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterIcon from '../../components/CounterIcon/CounterIcon';
// import WordCard from '../../components/WordCard/WordCard';
import WordForm from '../../components/WordForm/WordForm';
import { quantityNotEnteredWords } from '../../features/wordForm/wordFormSlice';
import { setWordCards, wordCards } from '../../features/textbook/textbookSlice';
import styles from './Textbook.module.scss';

const Textbook = (): JSX.Element => {
  const dispatch = useDispatch();

  const wordsQuantity = useSelector(quantityNotEnteredWords);
  const cards = useSelector(wordCards);
  console.log('cards', cards);

  React.useEffect(() => {
    if (window.localStorage.getItem('cards') !== null) {
      const newValue = window.localStorage.getItem('cards');
      if (newValue !== null) {
        const newValueArr = JSON.parse(newValue);
        dispatch(setWordCards(newValueArr));
      }
    }
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <h3>
          Введи <CounterIcon count={wordsQuantity} /> слов на русском языке.
        </h3>
        <WordForm cards={cards} />
      </div>
      {/* <WordCard
        imgSrc={image}
        wordInEN="afraid"
        wordInRU="бояться"
        exampleInEN="When someone is afraid, they feel fear."
        exampleInRU="Когда кто-то боится, он испытывает страх"
      /> */}
    </div>
  );
};

export default Textbook;
