import React from 'react';
import styles from './FormError.module.scss';

type FormErrorProps = {
  message: string;
};
const FormError = ({ message }: FormErrorProps): JSX.Element => <p className={styles.error}>{message}</p>;

export default FormError;
