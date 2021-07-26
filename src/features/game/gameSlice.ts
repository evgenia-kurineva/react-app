import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { getGameArray, getRUWordsArrayWithPlayWord } from '../../utils/index';
import { Result, WordCard } from '../../types/types';
import { answersCount } from '../../constants/constants';

interface GameState {
  isShowGameEnd: boolean;
  isShowGameResult: boolean;
  isShowAnswer: boolean;
  isFirstClick: boolean;
  gameCards: Array<WordCard>;
  currentGameCardIndex: number;
  currentGameCard: WordCard;
  possibleAnswers: Array<string>;
  wrongAnswers: Array<Result>;
  correctAnswers: Array<Result>;
}

const initialState: GameState = {
  isShowGameEnd: false,
  isShowGameResult: false,
  isShowAnswer: false,
  isFirstClick: true,
  gameCards: [],
  currentGameCardIndex: -1,
  currentGameCard: { wordRU: '', image: '', wordEN: '' },
  possibleAnswers: [],
  wrongAnswers: [],
  correctAnswers: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameCards: (state, action: PayloadAction<Array<WordCard>>) => {
      const allCards = action.payload;
      const gameCards = getGameArray(allCards);
      state.gameCards = gameCards;
    },
    setNewPossibleAnswersAndCurrentGameCard: (state) => {
      state.currentGameCardIndex++;
      if (state.currentGameCardIndex < state.gameCards.length) {
        const newPossibleAnswers = getRUWordsArrayWithPlayWord(
          state.gameCards,
          state.currentGameCardIndex,
          answersCount,
        );
        state.possibleAnswers = newPossibleAnswers;
        state.currentGameCard = state.gameCards[state.currentGameCardIndex];
      } else {
        state.isShowGameEnd = true;
      }
    },
    setIsShowGameEnd: (state, action: PayloadAction<boolean>) => {
      state.isShowGameEnd = action.payload;
    },
    setIsShowGameResult: (state, action: PayloadAction<boolean>) => {
      state.isShowGameResult = action.payload;
    },
    setIsShowAnswer: (state, action: PayloadAction<boolean>) => {
      state.isShowAnswer = action.payload;
    },
    setIsFirstClick: (state, action: PayloadAction<boolean>) => {
      state.isFirstClick = action.payload;
    },
    setCorrectAnswers: (state, action: PayloadAction<Result>) => {
      state.correctAnswers.push(action.payload);
    },
    setWrongAnswers: (state, action: PayloadAction<Result>) => {
      state.wrongAnswers.push(action.payload);
    },
    resetGame: () => initialState,
  },
});

export const {
  setGameCards,
  setNewPossibleAnswersAndCurrentGameCard,
  setIsShowGameEnd,
  setIsShowGameResult,
  setIsShowAnswer,
  setIsFirstClick,
  setCorrectAnswers,
  setWrongAnswers,
  resetGame,
} = gameSlice.actions;

export const currentGameCard = (state: RootState): WordCard => state.game.currentGameCard;

export const possibleGameAnswers = (state: RootState): Array<string> => state.game.possibleAnswers;

export const isShowGameAnswer = (state: RootState): boolean => state.game.isShowAnswer;

export const isShowEnd = (state: RootState): boolean => state.game.isShowGameEnd;

export const isShowResult = (state: RootState): boolean => state.game.isShowGameResult;

export const isFirstClickOnAnswer = (state: RootState): boolean => state.game.isFirstClick;

export const wrongGameAnswers = (state: RootState): Array<Result> => state.game.wrongAnswers;

export const correctGameAnswers = (state: RootState): Array<Result> => state.game.correctAnswers;

export default gameSlice.reducer;
