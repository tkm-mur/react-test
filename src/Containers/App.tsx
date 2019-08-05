import React, {FC} from "react";
import {Switch, Redirect, Route} from "react-router-dom";
import {Container} from "semantic-ui-react";

import Home from './Home/Home'
import Team from "./Team/Team";

const App: FC<{}> = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team/:id" component={Team} />
        <Redirect to="/" />
      </Switch>
    </Container>
  )
};

export default App;
