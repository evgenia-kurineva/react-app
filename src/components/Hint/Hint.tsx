import React from 'react';
import okImg from '../../assets/img/right.svg';
import styles from './Hint.module.scss';

type HintProps = {
  text: string;
};

const Hint = ({ text }: HintProps): JSX.Element => (
  <div className={styles.hint}>
    <img src={okImg} alt="Ok" />
    <p>{text}</p>
  </div>
);

export default Hint;
