import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/img/logo.svg';
import styles from './Header.module.scss';

const Header = (): JSX.Element => (
  <header>
    <NavLink to="/">
      <img className={styles.logo} src={logoImg} alt="RS-LANG" />
    </NavLink>
  </header>
);

export default Header;
