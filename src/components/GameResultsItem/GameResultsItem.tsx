import React from 'react';
import ImageIcon from '../ImageIcon/ImageIcon';
import soundImg from '../../assets/img/red_volume.svg';
import { textToSpeech } from '../../utils';
import { Colors, Sizes } from '../../types/types';

import styles from './GameResultsItem.module.scss';

type GameResultsItemProps = {
  wordInEN: string;
  wordInRU: string;
};

const GameResultsItem = ({ wordInEN, wordInRU }: GameResultsItemProps): JSX.Element => {
  const handleOnClick = () => {
    textToSpeech(wordInEN);
  };

  return (
    <div className={styles.container}>
      <div tabIndex={0} role="button" onClick={handleOnClick}>
        <ImageIcon src={soundImg} alt="произнести" size={Sizes.SMALL} color={Colors.RED} />
      </div>
      <p>
        <span className={styles.bold}>{wordInEN}</span> — {wordInRU}
      </p>
    </div>
  );
};

export default GameResultsItem;
