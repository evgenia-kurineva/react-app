import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import Hint from '../Hint/Hint';
import { resetTextbook } from '../../features/textbook/textbookSlice';
import { resetWordForm } from '../../features/wordForm/wordFormSlice';
import { setGameCards, setNewPossibleAnswersAndCurrentGameCard } from '../../features/game/gameSlice';
import { WordCard } from '../../types/types';
import styles from './Rules.module.scss';

type RulesProps = {
  cards: Array<WordCard>;
};

const Rules = ({ cards }: RulesProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleToGameClick = () => {
    dispatch(setGameCards(cards));
    dispatch(setNewPossibleAnswersAndCurrentGameCard());
  };

  const handleOnResetClick = () => {
    localStorage.removeItem('cards');
    dispatch(resetTextbook());
    dispatch(resetWordForm());
  };

  return (
    <div className={styles.container}>
      <p className={styles.rule}>Внимательно просмотри карточки ниже, выучи слова и их перевод.</p>
      <Hint text="Можешь послушать правильное произношение, нажав на красную иконку." />
      <p className={styles.rule}>Проверь, всё ли ты запомнил — жми кнопку &quot;Хочу учить эти слова!&quot; </p>
      <Hint text="Здесь тебя ждёт игра, в которой надо выбрать правильный перевод слова." />
      <Hint text="Чтобы прослушать слово ещё раз, нажми на иконку." />
      <p className={styles.rule}>Xочешь учить другие слова? Жми кнопку &quot;Выбрать другие слова!&quot;</p>
      <div className={styles.buttons}>
        <NavLink to="/game" onClick={handleToGameClick}>
          <Button text="Хочу учить эти слова!" />
        </NavLink>
        <div tabIndex={0} role="button" onClick={handleOnResetClick}>
          <Button text="Выбрать другие слова!" />
        </div>
      </div>
    </div>
  );
};

export default Rules;
