import styles from './styles.module.css';

import React, {PropsWithChildren} from 'react';

export function GreenText({ children }: PropsWithChildren) {
  return (
    <span className={styles['green-text']}>{children}</span>
  );
}
