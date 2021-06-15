import React from 'react';
import soundImg from '../../assets/img/red_volume.svg';
import styles from './WordCard.module.scss';

type WordCardProps = {
  imgSrc: string;
  wordInEN: string;
  wordInRU: string;
  exampleInEN: string;
  exampleInRU: string;
};

const WordCard = ({ imgSrc, wordInEN, wordInRU, exampleInEN, exampleInRU }: WordCardProps): JSX.Element => (
  <div className={styles.root}>
    <div className={styles.container}>
      <img className={styles.img} src={imgSrc} alt={`картинка для слова "${wordInRU}"`} />
      <div className={styles.container_right}>
        <img className={styles.icon} src={soundImg} alt="иконка для звука" />
        <span className={`${styles.bold} ${styles.margin}`}>{wordInEN}</span>
        <span className={styles.margin}>{wordInRU}</span>
      </div>
    </div>
    <div className={styles.examples}>
      <p className={`${styles.bold} ${styles.margin}`}>{exampleInEN}</p>
      <p className={styles.margin}>
        <span>→</span>
        {exampleInRU}
      </p>
    </div>
  </div>
);

export default WordCard;
