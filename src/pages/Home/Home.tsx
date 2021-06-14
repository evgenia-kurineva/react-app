import React from 'react';
import Button from '../../components/Button/Button';
import styles from './Home.module.scss';

const Home = (): JSX.Element => (
  <div className={styles.container}>
    <h3>Привет!</h3>
    <p>
      RS LANG — это онлайн школа для изучения английского языка. Здесь ты можешь учиться абсолютно бесплатно в удобное
      для тебя время в формате игры.
    </p>
    <Button text="Хочу учиться!" />
  </div>
);

export default Home;
