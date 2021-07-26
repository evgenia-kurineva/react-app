import React from 'react';
import { Colors, Sizes } from '../../types/types';

import styles from './ImageIcon.module.scss';

type ImageIconProps = {
  src: string;
  alt: string;
  size: Sizes;
  color: Colors;
};
const ImageIcon = ({ src, alt, size, color }: ImageIconProps): JSX.Element => (
  <div className={`${styles.container} ${styles[size]} ${styles[color]}`}>
    <img className={styles.img} src={src} alt={alt} />
  </div>
);

export default ImageIcon;
