import React, {FC} from "react";
import {Container} from "semantic-ui-react";
import Hoc from './Hoc'

const App: FC<{}> = () => {
  return (
    <Container>
      <Hoc/>
    </Container>
  )
};

export default App;
