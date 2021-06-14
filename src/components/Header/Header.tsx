import React from 'react';
import logoImg from '../../assets/img/logo.svg';
import styles from './Header.module.scss';

const Header = (): JSX.Element => (
  <header>
    <div>
      <img className={styles.logo} src={logoImg} alt="RS-LANG" />
    </div>
  </header>
);

export default Header;
