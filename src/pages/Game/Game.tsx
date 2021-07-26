import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import soundImg from '../../assets/img/volume.svg';
import ImageIcon from '../../components/ImageIcon/ImageIcon';
import { textToSpeech } from '../../utils';
import GameCard from '../../components/GameCard/GameCard';
import {
  currentGameCard,
  isShowGameAnswer,
  possibleGameAnswers,
  setIsFirstClick,
  setIsShowAnswer,
  setNewPossibleAnswersAndCurrentGameCard,
  setWrongAnswers,
} from '../../features/game/gameSlice';
import styles from './Game.module.scss';
import PossibleAnswers from '../../components/PossibleAnswers/PossibleAnswers';

const Game = (): JSX.Element => {
  const dispatch = useDispatch();

  const currentCard = useSelector(currentGameCard);
  const possibleAnswers = useSelector(possibleGameAnswers);
  const isShowAnswer = useSelector(isShowGameAnswer);

  const handleOnSoundClick = () => {
    textToSpeech(currentCard.wordEN);
  };

  const handleOnDontKnowClick = () => {
    dispatch(setIsShowAnswer(true));
    dispatch(setIsFirstClick(false));
    dispatch(setWrongAnswers(currentCard.wordRU));
  };

  const handleOnNextClick = () => {
    dispatch(setIsShowAnswer(false));
    dispatch(setIsFirstClick(true));
    dispatch(setNewPossibleAnswersAndCurrentGameCard());
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <div tabIndex={0} role="button" onClick={handleOnSoundClick}>
            <ImageIcon src={soundImg} alt="произнести" size="large" color="black" />
          </div>
        </div>
        {isShowAnswer && <GameCard imgSrc={currentCard.image} wordInEN={currentCard.wordEN} />}
      </div>
      <div>
        <PossibleAnswers possibleAnswers={possibleAnswers} correctAnswer={currentCard.wordRU} />
      </div>
      {!isShowAnswer && (
        <div>
          <div tabIndex={0} role="button" onClick={handleOnDontKnowClick}>
            <Button text="Не знаю" />
          </div>
        </div>
      )}
      {isShowAnswer && (
        <div>
          <div tabIndex={0} role="button" onClick={handleOnNextClick}>
            <Button text="Далее" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
