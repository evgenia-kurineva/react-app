import React from 'react';
import { messageIfOnlyCorrectAnswers, messageIfWasWrongAnswers } from '../../constants/constants';
import Button from '../Button/Button';
import ImageIcon from '../ImageIcon/ImageIcon';
import closeImg from '../../assets/img/close.svg';
import styles from './GameEnd.module.scss';

type GameEndProps = {
  countCorrectAnswers: number;
  countWrongAnswers: number;
};

const GameEnd = ({ countCorrectAnswers, countWrongAnswers }: GameEndProps): JSX.Element => {
  const handleShowResult = () => {
    console.log('Result');
  };

  const handleOnCloseClick = () => {
    console.log('Close');
  };

  return (
    <div className={styles.container}>
      <div tabIndex={0} role="button" onClick={handleOnCloseClick}>
        <ImageIcon src={closeImg} alt="закрыть" size="large" color="black" />
      </div>
      {countWrongAnswers > 0 ? <p>{messageIfOnlyCorrectAnswers}</p> : <p>{messageIfWasWrongAnswers}</p>}
      <p>
        правильно:<span className={styles.correct}>{countCorrectAnswers}</span>, ошибок:
        <span className={styles.wrong}>{countWrongAnswers}</span>
      </p>
      <div tabIndex={0} role="button" onClick={handleShowResult}>
        <Button text="Результаты игры" />
      </div>
    </div>
  );
};

export default GameEnd;
