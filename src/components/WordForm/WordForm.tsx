import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../Button/Button';
import FormError from '../FormError/FormError';
import Loader from '../Loader/Loader';
import ImageIcon from '../ImageIcon/ImageIcon';
import paperclipImg from '../../assets/img/paperclip.svg';
import styles from './WordForm.module.scss';

const WordForm = (): JSX.Element => {
  const [image, setImage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

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
    setError('');
    const url = process.env.REACT_APP_CLOUDINARY_API_ENDPOINT;
    if (!url) {
      // eslint-disable-next-line no-console
      console.error('Error: no url!');
      return;
    }
    const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
    if (!uploadPreset) {
      // eslint-disable-next-line no-console
      console.error('Error: no upload preset!');
      return;
    }
    const { files } = event.target;
    if (!files[0]) {
      setError('Выбери файл!');
      return;
    }
    if (!validFileFormats.includes(files[0].type)) {
      setError('Тип файла должен быть jpg, jpeg или png!');
      return;
    }
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', uploadPreset);
    setIsLoading(true);

    fetch(url, {
      method: 'post',
      body: data,
    })
      .then((response) => response.json())
      .then((res) => {
        // надо будет сохранить в redux картинку res.secure_url
        console.log('Success:', res);
        setImage(res.secure_url);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error('Error:', err));

    setIsLoading(false);
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
        // надо будет сохранить в redux word
        // {word: "котенок", picture: File}
        console.log(values);
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

          {isLoading && (
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
