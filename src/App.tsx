import React from 'react';
import {Container, Header} from "semantic-ui-react";
import Styles from './assets/scss/global.module.scss';
import Counter from './containers/counter/counter'
import ColorfulBeads from "./containers/colorfulBeads/colorfulBeads";

const App: React.FC = () => {
  return (
    <Container className={Styles.container}>
      <header>
        <Header as="h1">ビーズカウンター</Header>
      </header>

      <Counter />

      <ColorfulBeads />
    </Container>
  );
};

export default App;
