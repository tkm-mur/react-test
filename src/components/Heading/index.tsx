import React, { FC } from 'react';
import styles from './index.module.scss';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4';
}

const Heading: FC<HeadingProps> = props => {
  const { level, children } = props;

  switch (level) {
    case 'h1':
      return <h1 className={styles['heading--under-line']}>{children}</h1>;
    case 'h2':
      return <h2>{children}</h2>;
    case 'h3':
      return <h3>{children}</h3>;
    case 'h4':
      return <h4>{children}</h4>;
    default:
      return <div>{children}</div>;
  }
};

export default Heading;
