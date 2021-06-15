import React from 'react';
import CounterIcon from '../../components/CounterIcon/CounterIcon';
// import WordCard from '../../components/WordCard/WordCard';
import styles from './Textbook.module.scss';
import WordForm from '../../components/WordForm/WordForm';

const Textbook = (): JSX.Element => (
  <div>
    <div className={styles.container}>
      <h3>
        Введи <CounterIcon count={10} /> слов на русском языке.
      </h3>
      <WordForm />
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

export default Textbook;
