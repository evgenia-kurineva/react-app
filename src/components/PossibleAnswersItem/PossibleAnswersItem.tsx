import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  isFirstClickOnAnswer,
  isShowGameAnswer,
  setCorrectAnswers,
  setIsFirstClick,
  setIsShowAnswer,
  setWrongAnswers,
} from '../../features/game/gameSlice';
import rightImg from '../../assets/img/right.svg';
import wrongImg from '../../assets/img/wrong.svg';

import styles from './PossibleAnswersItem.module.scss';
import { Result } from '../../types/types';

type PossibleAnswersItemProps = {
  wordRU: string;
  wordRUNumber: number;
  correctAnswer: Result;
};

const PossibleAnswersItem = ({ wordRU, wordRUNumber, correctAnswer }: PossibleAnswersItemProps): JSX.Element => {
  const [isCheckedWrongAnswer, setIsCheckerdWrongAnswer] = React.useState(false);

  const isCorrectAnswer = wordRU === correctAnswer.wordRU;

  const dispatch = useDispatch();

  const isShowAnswer = useSelector(isShowGameAnswer);
  const isFirstClick = useSelector(isFirstClickOnAnswer);

  React.useEffect(() => {
    if (!isShowAnswer) {
      setIsCheckerdWrongAnswer(false);
    }
  }, [isShowAnswer]);

  const onSomeWordClick = () => {
    if (isFirstClick) {
      dispatch(setIsFirstClick(false));
      dispatch(setIsShowAnswer(true));
      if (!isCorrectAnswer) {
        setIsCheckerdWrongAnswer(true);
        dispatch(setWrongAnswers(correctAnswer));
      } else {
        dispatch(setCorrectAnswers(correctAnswer));
      }
    }
  };

  return (
    <div className={styles.container}>
      {isShowAnswer && isCheckedWrongAnswer && <img src={wrongImg} alt="no" />}
      {isShowAnswer && isCorrectAnswer && <img src={rightImg} alt="yes" />}
      <span className={styles.number}>{wordRUNumber}</span>
      <span
        className={`${styles.word} ${isShowAnswer && isCorrectAnswer ? styles.text : ''}`}
        role="button"
        tabIndex={0}
        onClick={onSomeWordClick}
      >
        {wordRU}
      </span>
    </div>
  );
};

export default PossibleAnswersItem;
