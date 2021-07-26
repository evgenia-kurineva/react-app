import React from 'react';
import GameResultsItem from '../GameResultsItem/GameResultsItem';
import { Result } from '../../types/types';

import styles from './GameResults.module.scss';
import CloseBtn from '../CloseBtn/CloseBtn';

type GameResultsProps = {
  correctAnswers: Array<Result>;
  wrongAnswers: Array<Result>;
};

const GameResults = ({ correctAnswers, wrongAnswers }: GameResultsProps): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.button}>
      <CloseBtn />
    </div>
    <h3>
      Ошибок <span className={styles.wrong}>{wrongAnswers.length}</span>
    </h3>
    {wrongAnswers.length > 0 &&
      wrongAnswers.map((item) => <GameResultsItem key={item.wordEN} wordInEN={item.wordEN} wordInRU={item.wordRU} />)}
    <h3>
      Правильно <span className={styles.correct}>{correctAnswers.length}</span>
    </h3>
    {correctAnswers.length > 0 &&
      correctAnswers.map((item) => <GameResultsItem key={item.wordEN} wordInEN={item.wordEN} wordInRU={item.wordRU} />)}
  </div>
);

export default GameResults;
