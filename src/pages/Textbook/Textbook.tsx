import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterIcon from '../../components/CounterIcon/CounterIcon';
import WordCard from '../../components/WordCard/WordCard';
import WordForm from '../../components/WordForm/WordForm';
import { quantityNotEnteredWords } from '../../features/wordForm/wordFormSlice';
import { setWordCards, wordCards } from '../../features/textbook/textbookSlice';
import styles from './Textbook.module.scss';
import Rules from '../../components/Rules/Rules';

const Textbook = (): JSX.Element => {
  const dispatch = useDispatch();

  const wordsQuantity = useSelector(quantityNotEnteredWords);
  const cards = useSelector(wordCards);

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
      {/* {cards.length < 10 && (
        <div className={styles.container}>
          <h3>
            Введи <CounterIcon count={wordsQuantity} /> слов на русском языке.
          </h3>
          <WordForm cards={cards} />
        </div>
      )} */}

      <div className={styles.container}>
        {cards.length < 10 ? (
          <>
            <h3>
              Введи <CounterIcon count={wordsQuantity} /> слов на русском языке.
            </h3>
            <WordForm cards={cards} />
          </>
        ) : (
          <Rules />
        )}
      </div>

      {cards.length > 0 && (
        <div className={styles.cards}>
          {cards.map((card) => (
            <WordCard key={card.wordRU} imgSrc={card.image} wordInEN={card.wordEN} wordInRU={card.wordRU} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Textbook;
