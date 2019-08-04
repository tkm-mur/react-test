import React, {Component} from 'react';
import {Container} from "semantic-ui-react";
import {Button, Card, Statistic} from "semantic-ui-react";

interface AppState {
  count: number
}

class App extends Component<{}, AppState> {
  state: AppState;

  constructor(props: {}) {
    super(props);
    this.state = {count: 0}
  }

  increment = () => {
    this.setState(prev => ({
      count: prev.count + 1
    }))
  };

  decrement = () => {
    this.setState(prev => ({
      count: prev.count - 1
    }))
  };

  render() {
    return (
      <Container>
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-bord">
            <Statistic.Label>Count</Statistic.Label>
            <Statistic.Value>{this.state.count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={() => this.decrement()}>-1</Button>
              <Button color="blue" onClick={() => this.increment()}>+1</Button>
            </div>
          </Card.Content>
        </Card>
      </Container>
    )
  }
}

export default App;
