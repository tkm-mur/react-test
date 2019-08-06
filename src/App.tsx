import React from 'react';
import {Container} from "semantic-ui-react";
import styles from './assets/scss/App.module.scss';

const App: React.FC = () => {
  return (
    <Container className={styles.app}>
      <h1>TEST</h1>
    </Container>
  );
};

export default App;
