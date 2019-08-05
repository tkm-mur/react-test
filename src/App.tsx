import React, {Component} from "react";
import {Container, Card, Icon, Button, Statistic} from "semantic-ui-react";

const LIMIT = 10;

interface AppState {
  timeLeft: number
}

class App extends Component<{}, AppState> {
  timer?: number;

  constructor(props: {}) {
    super(props);
    this.state = {
      timeLeft: LIMIT
    }
  }

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.tick();
    }, 1000)
  }

  componentDidUpdate() {
    if (this.state.timeLeft === 0) {
      this.reset()
    }
  }

  tick = () => {
    this.setState({timeLeft: this.state.timeLeft - 1})
  };

  reset = () => {
    this.setState({timeLeft: LIMIT});
  };

  render() {
    return (
      <Container>
        <header>
          <h1>タイマー</h1>
        </header>
        <Card>
          <Statistic>
            <Statistic.Label>Time</Statistic.Label>
            <Statistic.Value>{this.state.timeLeft}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <Button color="red" fluid onClick={() => this.reset()}>
              <Icon name="redo"/>
              Reset
            </Button>
          </Card.Content>
        </Card>
      </Container>
    )
  }
}

export default App;
