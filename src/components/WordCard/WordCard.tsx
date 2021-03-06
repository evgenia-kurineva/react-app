import React from 'react';
import soundImg from '../../assets/img/red_volume.svg';
import { Colors, Sizes } from '../../types/types';
import { textToSpeech } from '../../utils/textToSpeech';
import ImageIcon from '../ImageIcon/ImageIcon';

import styles from './WordCard.module.scss';

type WordCardProps = {
  imgSrc: string;
  wordInEN: string;
  wordInRU: string;
};

const WordCard = ({ imgSrc, wordInEN, wordInRU }: WordCardProps): JSX.Element => {
  const handleOnClick = () => {
    textToSpeech(wordInEN);
  };

  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgSrc} alt={`картинка для слова "${wordInRU}"`} />
      <div className={styles.volume} tabIndex={0} role="button" onClick={handleOnClick}>
        <ImageIcon src={soundImg} alt="произнести" size={Sizes.SMALL} color={Colors.RED} />
      </div>
      <p className={styles.bold}>{wordInEN}</p>
      <p>{wordInRU}</p>
    </div>
  );
};

export default WordCard;
