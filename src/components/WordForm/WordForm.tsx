import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button/Button';
import FormError from '../FormError/FormError';
import Loader from '../Loader/Loader';
import ImageIcon from '../ImageIcon/ImageIcon';
import paperclipImg from '../../assets/img/paperclip.svg';
import {
  currentImage,
  isLoading,
  fetchImage,
  fetchENWord,
  errorMessage,
  setErrorMessage,
} from '../../features/textbook/textbookSlice';
import styles from './WordForm.module.scss';

const WordForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const image = useSelector(currentImage);
  const isImageLoading = useSelector(isLoading);
  const error = useSelector(errorMessage);

  const validFileFormats = ['image/jpg', 'image/jpeg', 'image/png'];

  const validationsSchema = yup.object().shape({
    word: yup
      .string()
      .matches(/^[А-Яа-яЁё\s]+$/, 'Слово должно быть на русском языке! Цифры не допускаются!')
      .max(15, 'Длина слова не может быть более 15 символов!')
      .required('Введи слово на русском языке!'),

    picture: yup.mixed().required('Добавь картинку для слова!'),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onUploadImage = async (event: any, setFieldValue: any) => {
    setFieldValue('picture', event.currentTarget.files[0], true);
    dispatch(setErrorMessage(''));
    const file = event.target.files[0];
    if (!file) {
      dispatch(setErrorMessage('Выбери файл!'));
      return;
    }
    if (!validFileFormats.includes(file.type)) {
      dispatch(setErrorMessage('Тип файла должен быть jpg, jpeg или png!'));
      return;
    }
    dispatch(fetchImage(file));
  };

  return (
    <Formik
      initialValues={{
        word: '',
        picture: '',
      }}
      validationSchema={validationsSchema}
      validateOnBlur
      onSubmit={(values) => {
        const { word } = values;
        dispatch(fetchENWord(word.toLowerCase()));
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="word">
              <p>Введи слово на русском языке:</p>
              <input
                type="text"
                id="word"
                name="word"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.word}
                autoComplete="off"
              />
            </label>
          </div>
          {touched.word && errors.word && <FormError message={errors.word} />}

          <div>
            <label htmlFor="picture">
              <p>Добавь картинку, которая соответствует этому слову:</p>
              <div className={styles.paperclip}>
                <ImageIcon
                  src={paperclipImg}
                  alt="иконка для загрузки файла с изображением"
                  size="small"
                  color="black"
                />
              </div>
              <input
                type="file"
                id="picture"
                name="picture"
                onChange={(event) => {
                  onUploadImage(event, setFieldValue);
                }}
              />
            </label>
          </div>
          {touched.picture && errors.picture && <FormError message={errors.picture} />}
          {error && <FormError message={error} />}

          {isImageLoading && (
            <div>
              <Loader />
            </div>
          )}

          {image.length !== 0 && <img className={styles.img} src={image} alt="картинка для слова" />}

          {isValid && dirty && (
            <div className={styles.button}>
              <button type="submit" className={styles.no_styles}>
                <Button text="Хочу добавить это слово" />
              </button>
            </div>
          )}
        </form>
      )}
    </Formik>
  );
};

export default WordForm;
