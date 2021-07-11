import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTranslateAPI, fetchImageAPI } from '../../api/api';
import { AppThunk, RootState } from '../../store/store';
import { WordCard } from '../../types/types';

interface TextbookState {
  wordCards: Array<WordCard>;
  isLoading: boolean;
  currentImage: string;
  currentWordEN: string;
  currentWordRU: string;
  quantityNotEnteredWords: number;
  errorMessage: string;
}

const initialState: TextbookState = {
  wordCards: [],
  isLoading: false,
  currentImage: '',
  currentWordEN: '',
  currentWordRU: '',
  quantityNotEnteredWords: 10,
  errorMessage: '',
};

export const textbookSlice = createSlice({
  name: 'textbook',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCurrentWordEN: (state, action: PayloadAction<string>) => {
      state.currentWordEN = action.payload;
    },
    setCurrentWordRU: (state, action: PayloadAction<string>) => {
      state.currentWordRU = action.payload;
    },
    setCurrentImage: (state, action: PayloadAction<string>) => {
      state.currentImage = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setQuantityNotEnteredWords: (state) => {
      state.quantityNotEnteredWords -= 1;
    },
  },
});

export const {
  setIsLoading,
  setCurrentWordEN,
  setCurrentImage,
  setCurrentWordRU,
  setQuantityNotEnteredWords,
  setErrorMessage,
} = textbookSlice.actions;

export const fetchImage = (file: File): AppThunk =>
  async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const image = await fetchImageAPI(file);
      if (image) {
        dispatch(setCurrentImage(image));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-alert
      alert('Сервер для загрузки изображения недоступен! Попробуйте позже');
    }
    dispatch(setIsLoading(false));
  };

export const fetchENWord = (ruWord: string): AppThunk =>
  async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const enWord = await fetchTranslateAPI(ruWord);
      if (enWord) {
        dispatch(setCurrentWordEN(enWord));
        dispatch(setQuantityNotEnteredWords());
        dispatch(setCurrentWordRU(ruWord));
      } else {
        dispatch(setErrorMessage('Нет перевода. Проверь правильность написания слова!'));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-alert
      alert('Сервер для перевода недоступен! Попробуйте позже');
    }
    dispatch(setIsLoading(false));
  };

export const isLoading = (state: RootState): boolean => state.textbook.isLoading;
export const wordCards = (state: RootState): Array<WordCard> => state.textbook.wordCards;
export const currentImage = (state: RootState): string => state.textbook.currentImage;
export const currentWordEN = (state: RootState): string => state.textbook.currentWordEN;
export const currentWordRU = (state: RootState): string => state.textbook.currentWordRU;
export const errorMessage = (state: RootState): string => state.textbook.errorMessage;
export const quantityNotEnteredWords = (state: RootState): number => state.textbook.quantityNotEnteredWords;

export default textbookSlice.reducer;
