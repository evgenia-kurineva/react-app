import React from 'react';
import styles from './CounterIcon.module.scss';

type CounterIconProps = {
  count: number;
};
const CounterIcon = ({ count }: CounterIconProps): JSX.Element => <div className={styles.counter}>{count}</div>;

export default CounterIcon;
