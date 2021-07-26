import React from 'react';
import { useDispatch } from 'react-redux';
import { messageIfOnlyCorrectAnswers, messageIfWasWrongAnswers } from '../../constants/constants';
import Button from '../Button/Button';
import CloseBtn from '../CloseBtn/CloseBtn';
import { setIsShowGameEnd, setIsShowGameResult } from '../../features/game/gameSlice';

import styles from './GameEnd.module.scss';

type GameEndProps = {
  countCorrectAnswers: number;
  countWrongAnswers: number;
};

const GameEnd = ({ countCorrectAnswers, countWrongAnswers }: GameEndProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleShowResult = () => {
    dispatch(setIsShowGameResult(true));
    dispatch(setIsShowGameEnd(false));
  };

  return (
    <div className={styles.container}>
      <div className={styles.close}>
        <CloseBtn />
      </div>
      {countWrongAnswers === 0 ? <p>{messageIfOnlyCorrectAnswers}</p> : <p>{messageIfWasWrongAnswers}</p>}
      <p>
        правильно: <span className={styles.correct}>{countCorrectAnswers}</span>, ошибок:{' '}
        <span className={styles.wrong}>{countWrongAnswers}</span>
      </p>
      <div tabIndex={0} role="button" onClick={handleShowResult}>
        <Button text="Результаты игры" />
      </div>
    </div>
  );
};

export default GameEnd;
