import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import wordFormReducer from '../features/wordForm/wordFormSlice';
import textbookReducer from '../features/textbook/textbookSlice';

export const store = configureStore({
  reducer: {
    wordForm: wordFormReducer,
    textbook: textbookReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
