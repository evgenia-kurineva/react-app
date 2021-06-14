import React from 'react';
import bgImg from '../../assets/img/bg.jpg';
import styles from './Background.module.scss';

const Background = ({ children }: any): JSX.Element => (
  <div>
    <img className={styles.bg} src={bgImg} alt="Пейзаж неизвестной планеты" />
    {children}
  </div>
);

export default Background;
