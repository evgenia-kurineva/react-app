import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentGameCard,
  isShowGameAnswer,
  possibleGameAnswers,
  setIsFirstClick,
  setIsShowAnswer,
  setNewPossibleAnswersAndCurrentGameCard,
  setWrongAnswers,
} from '../../features/game/gameSlice';
import { Colors, Sizes } from '../../types/types';
import { textToSpeech } from '../../utils';
import Button from '../Button/Button';
import GameCard from '../GameCard/GameCard';
import ImageIcon from '../ImageIcon/ImageIcon';
import PossibleAnswers from '../PossibleAnswers/PossibleAnswers';
import soundImg from '../../assets/img/volume.svg';

import styles from './GameComponent.module.scss';

const GameComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  const currentCard = useSelector(currentGameCard);
  const possibleAnswers = useSelector(possibleGameAnswers);
  const isShowAnswer = useSelector(isShowGameAnswer);

  React.useEffect(() => {
    textToSpeech(currentCard.wordEN);
  }, [currentCard]);

  const handleOnSoundClick = () => {
    textToSpeech(currentCard.wordEN);
  };

  const handleOnDontKnowClick = () => {
    dispatch(setIsShowAnswer(true));
    dispatch(setIsFirstClick(false));
    dispatch(setWrongAnswers({ wordRU: currentCard.wordRU, wordEN: currentCard.wordEN }));
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
            <ImageIcon src={soundImg} alt="произнести" size={Sizes.LARGE} color={Colors.BLACK} />
          </div>
        </div>
        {isShowAnswer && <GameCard imgSrc={currentCard.image} wordInEN={currentCard.wordEN} />}
      </div>
      <div>
        <PossibleAnswers
          possibleAnswers={possibleAnswers}
          correctAnswer={{ wordRU: currentCard.wordRU, wordEN: currentCard.wordEN }}
        />
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

export default GameComponent;
