import React, {FC, useState} from "react";
import {Container} from "semantic-ui-react";

const App: FC<{}> = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <Container>
      <p>Counter: {counter}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </Container>
  )
};

export default App;
