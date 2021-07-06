import React from 'react';
// import axios from 'axios';
import CounterIcon from '../../components/CounterIcon/CounterIcon';
// import WordCard from '../../components/WordCard/WordCard';
import styles from './Textbook.module.scss';
import WordForm from '../../components/WordForm/WordForm';

const Textbook = (): JSX.Element => {
  const url = process.env.REACT_APP_IBM_CLOUD_URL;
  console.log('url', url);
  // const credentials = `apikey:${process.env.REACT_APP_IBM_CLOUD_API_KEY}`;
  // console.log('credentials', credentials);
  // const base64Credentials = btoa(unescape(encodeURIComponent(credentials)));

  // React.useEffect(() => {
  //   if (!url) {
  //     // eslint-disable-next-line no-console
  //     console.log('Error: No url');
  //     return;
  //   }
  //   const json = JSON.stringify({ text: ['Арбуз'], model_id: 'ru-en' });
  //   axios
  //     .post(url, json, {
  //       headers: {
  //         'Content-type': 'Application/json',
  //         Authorization: `Basic ${base64Credentials}`,
  //       },
  //     })
  //     .then(
  //       (response) => {
  //         const resp = response.data;
  //         console.log(resp);
  // ///////////////////////////
  // ЕXAMPLE resp ///////////////////
  // {translations: [{translation: "Watermelon"}], word_count: 1, character_count: 5}
  // character_count: 5
  // translations: [{translation: "Watermelon"}]
  // 0: {translation: "Watermelon"}
  // translation: "Watermelon"
  // word_count: 1
  //       },
  // ///////////////////////////
  //       (error) => {
  //         // eslint-disable-next-line no-console
  //         console.log(error);
  //       },
  //     );
  // }, []);

  return (
    <div>
      <div className={styles.container}>
        <h3>
          Введи <CounterIcon count={10} /> слов на русском языке.
        </h3>
        <WordForm />
      </div>
      {/* <WordCard
        imgSrc={image}
        wordInEN="afraid"
        wordInRU="бояться"
        exampleInEN="When someone is afraid, they feel fear."
        exampleInRU="Когда кто-то боится, он испытывает страх"
      /> */}
    </div>
  );
};

export default Textbook;
