import styles from './styles.module.css';

import React, {PropsWithChildren} from 'react';

export function RedText({ children }: PropsWithChildren) {
  return (
    <span className={styles['red-text']}>{children}</span>
  );
}
