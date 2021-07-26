import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WordCard from '../../components/WordCard/WordCard';
import { setWordCards, wordCards } from '../../features/textbook/textbookSlice';
import Rules from '../../components/Rules/Rules';
import { wordsCount } from '../../constants/constants';
import styles from './Textbook.module.scss';
import EnterWord from '../../components/EnterWord/EnterWord';

const Textbook = (): JSX.Element => {
  const dispatch = useDispatch();

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
      <div className={styles.container}>
        {cards.length < wordsCount ? <EnterWord cards={cards} /> : <Rules cards={cards} />}
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
