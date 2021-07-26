import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import wordFormReducer from '../features/wordForm/wordFormSlice';
import textbookReducer from '../features/textbook/textbookSlice';
import gameReducer from '../features/game/gameSlice';

export const store = configureStore({
  reducer: {
    wordForm: wordFormReducer,
    textbook: textbookReducer,
    game: gameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
