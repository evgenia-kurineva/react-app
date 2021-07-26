import React from 'react';
import { useSelector } from 'react-redux';
import { correctGameAnswers, isShowEnd, isShowResult, wrongGameAnswers } from '../../features/game/gameSlice';

import GameComponent from '../../components/GameComponent/GameComponent';
import GameEnd from '../../components/GameEnd/GameEnd';
import GameResults from '../../components/GameResults/GameResults';

const Game = (): JSX.Element => {
  const isShowGameEnd = useSelector(isShowEnd);
  const isShowGameResult = useSelector(isShowResult);
  const correctAnswers = useSelector(correctGameAnswers);
  const wrongAnswers = useSelector(wrongGameAnswers);

  return (
    <>
      {!isShowGameEnd && !isShowGameResult && <GameComponent />}
      {isShowGameEnd && <GameEnd countCorrectAnswers={correctAnswers.length} countWrongAnswers={wrongAnswers.length} />}
      {isShowGameResult && <GameResults correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} />}
    </>
  );
};

export default Game;
