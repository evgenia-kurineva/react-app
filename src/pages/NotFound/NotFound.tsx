import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './NotFound.module.scss';

const NotFound = (): JSX.Element => (
  <div className={styles.container}>
    <p>К сожалению, такой страницы нет :(</p>
    <NavLink to="/">
      <Button text="Перейти на главную" />
    </NavLink>
  </div>
);

export default NotFound;
