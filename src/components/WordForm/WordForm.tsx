import React from 'react';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import ImageIcon from '../ImageIcon/ImageIcon';
import paperclipImg from '../../assets/img/paperclip.svg';
import styles from './WordForm.module.scss';

const WordForm = (): JSX.Element => {
  const [image, setImage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const onUploadImage = async (e: any) => {
    const API_ENDPOINT = 'https://api.cloudinary.com/v1_1/kurineva/upload';
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'darvin');
    setIsLoading(true);
    // const res = await fetch(API_ENDPOINT, {
    //   method: 'POST',
    //   body: data,
    // });
    // const file = await res.json();}
    // setImage(file.secure_url);
    fetch(API_ENDPOINT, {
      method: 'post',
      body: data,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('Success:', res);
        setImage(res.secure_url);
      })
      .catch((err) => console.error('Error:', err));

    setIsLoading(false);
  };

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="word">
          <p>Введи слово на русском языке:</p>
          <input type="text" id="word" name="word" />
        </label>
      </div>
      <div>
        <label htmlFor="picture">
          <p>Добавь картинку, которая соответствует этому слову:</p>
          <ImageIcon src={paperclipImg} alt="иконка для загрузки файла с изображением" size="small" color="black" />
          <input type="file" id="picture" name="picture" onChange={onUploadImage} />
        </label>
      </div>

      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <img src={image} alt="картинка для слова" />
      )}
      {/* <input type="submit">Хочу добавить это слово</input> */}
      <div className={styles.button}>
        <Button text="Хочу добавить это слово" />
      </div>
    </form>
  );
};

export default WordForm;
