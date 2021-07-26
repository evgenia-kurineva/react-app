import React from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
};
const Button = ({ text }: ButtonProps): JSX.Element => <span className={styles.button}>{text}</span>;

export default Button;
