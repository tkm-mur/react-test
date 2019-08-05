import React, {FC, useState, useEffect} from "react";
import {Container} from "semantic-ui-react";

const App: FC<{}> = () => {
  const LIMIT_TIME = 5;
  const [timer, setTimer] = useState(LIMIT_TIME);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTimer((prevTIme) => {
        return prevTIme === 0 ? LIMIT_TIME : prevTIme - 1;
      });

      return () => clearInterval(timerId);
    }, 1000)
  }, []);

  const reset = () => {
    setTimer(LIMIT_TIME);
  };

  return (
    <Container>
      <div>{timer}</div>
      <button onClick={reset}>Reset</button>
    </Container>
  )
};

export default App;
