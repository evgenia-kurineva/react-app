import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTranslateAPI, fetchImageAPI } from '../../api/api';
import { AppThunk, RootState } from '../../store/store';
import { WordCard } from '../../types/types';

interface WordFormState {
  isLoading: boolean;
  currentImage: string;
  quantityNotEnteredWords: number;
  errorMessage: string;
  newWordCard: WordCard | null;
  isSubmitted: boolean;
}

const initialState: WordFormState = {
  isLoading: false,
  currentImage: '',
  quantityNotEnteredWords: 10,
  errorMessage: '',
  newWordCard: null,
  isSubmitted: false,
};

export const wordFormSlice = createSlice({
  name: 'wordForm',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
    },
    setCurrentImage: (state, action: PayloadAction<string>) => {
      state.currentImage = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setNewWordCard: (state, action: PayloadAction<WordCard>) => {
      const newCard = action.payload;
      newCard.image = state.currentImage;
      state.newWordCard = newCard;
    },
    setQuantityNotEnteredWords: (state) => {
      state.quantityNotEnteredWords -= 1;
    },
  },
});

export const {
  setIsLoading,
  setCurrentImage,
  setQuantityNotEnteredWords,
  setErrorMessage,
  setNewWordCard,
  setIsSubmitted,
} = wordFormSlice.actions;

export const fetchImage =
  (file: File): AppThunk =>
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

export const fetchENWord =
  (ruWord: string): AppThunk =>
    async (dispatch) => {
      dispatch(setIsLoading(true));
      try {
        const enWord = await fetchTranslateAPI(ruWord);
        if (enWord) {
          dispatch(setNewWordCard({ wordRU: ruWord, image: '', wordEN: enWord.toLowerCase() }));
          dispatch(setQuantityNotEnteredWords());
          dispatch(setIsSubmitted(true));
          dispatch(setCurrentImage(''));
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

export const isLoading = (state: RootState): boolean => state.wordForm.isLoading;
export const isSubmitted = (state: RootState): boolean => state.wordForm.isSubmitted;
export const currentImage = (state: RootState): string => state.wordForm.currentImage;
export const errorMessage = (state: RootState): string => state.wordForm.errorMessage;
export const quantityNotEnteredWords = (state: RootState): number => state.wordForm.quantityNotEnteredWords;
export const newWordCard = (state: RootState): WordCard | null => state.wordForm.newWordCard;

export default wordFormSlice.reducer;
