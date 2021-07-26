import React from 'react';
import { Result } from '../../types/types';
import PossibleAnswersItem from '../PossibleAnswersItem/PossibleAnswersItem';

import styles from './PossibleAnswers.module.scss';

type PossibleAnswersProps = {
  possibleAnswers: Array<string>;
  correctAnswer: Result;
};

const PossibleAnswers = ({ possibleAnswers, correctAnswer }: PossibleAnswersProps): JSX.Element => (
  <div className={styles.container}>
    {possibleAnswers.map((word, index) => (
      <PossibleAnswersItem key={word} wordRU={word} wordRUNumber={index + 1} correctAnswer={correctAnswer} />
    ))}
  </div>
);

export default PossibleAnswers;
