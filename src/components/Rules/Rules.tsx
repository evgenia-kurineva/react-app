import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Rules.module.scss';
import Hint from '../Hint/Hint';

const Rules = (): JSX.Element => (
  <div className={styles.container}>
    <p className={styles.rule}>Внимательно просмотри карточки ниже, выучи слова и их перевод.</p>
    <Hint text="Можешь послушать правильное произношение, нажав на красную иконку." />
    <p className={styles.rule}>Проверь, всё ли ты запомнил — жми кнопку &quot;Хочу учить эти слова!&quot; </p>
    <Hint text="Здесь тебя ждёт игра, в которой надо выбрать правильный перевод слова." />
    <Hint text="Чтобы прослушать слово ещё раз, нажми на иконку." />
    <p className={styles.rule}>Xочешь учить другие слова? Жми кнопку &quot;Выбрать другие слова!&quot;</p>
    <div className={styles.buttons}>
      <NavLink to="/game">
        <Button text="Хочу учить эти слова!" />
      </NavLink>
      <div>
        <Button text="Выбрать другие слова!" />
      </div>
    </div>
  </div>
);

export default Rules;
