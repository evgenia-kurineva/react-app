import React from 'react';

import styles from './GameCard.module.scss';

type GameCardProps = {
  imgSrc: string;
  wordInEN: string;
};

const GameCard = ({ imgSrc, wordInEN }: GameCardProps): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.image}>
      <img className={styles.img} src={imgSrc} alt={`картинка для слова "${wordInEN}"`} />
    </div>
    <div className={styles.bold}>{wordInEN}</div>
  </div>
);

export default GameCard;
