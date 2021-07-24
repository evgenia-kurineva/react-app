import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { WordCard } from '../../types/types';

interface TextbookState {
  wordCards: Array<WordCard>;
}

const initialState: TextbookState = {
  wordCards: [],
};

export const textbookSlice = createSlice({
  name: 'textbook',
  initialState,
  reducers: {
    setWordCards: (state, action: PayloadAction<Array<WordCard>>) => {
      state.wordCards = action.payload;
    },
    resetTextbook: () => initialState,
  },
});

export const { setWordCards, resetTextbook } = textbookSlice.actions;

export const wordCards = (state: RootState): Array<WordCard> => state.textbook.wordCards;

export default textbookSlice.reducer;
