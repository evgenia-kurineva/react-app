import React from 'react';
import styles from './Textbook.module.scss';

const Textbook = (): JSX.Element => {
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
    <div>
      <div className={styles.container}>
        <h3>
          Введи <span>10</span> слов на русском языке.
        </h3>
        <form>
          <label htmlFor="word">
            Введи слово на русском:
            <input type="text" id="word" name="word" />
          </label>
          <label htmlFor="picture">
            Добавь к слову картинку:
            <input type="file" id="picture" name="picture" onChange={onUploadImage} />
          </label>
          {isLoading ? <p>Загрузка...</p> : <img src={image} alt="картинка для слова" />}
          <button type="submit">Хочу добавить слово</button>
        </form>
      </div>
    </div>
  );
};

export default Textbook;
