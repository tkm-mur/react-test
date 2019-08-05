import React, {FC, useState, useEffect} from "react";
import {Container} from "semantic-ui-react";
import Counter from "../Components/App";

const useCounter = (limitSec: number): [number, () => void] => {
  const [counter, setCounter] = useState(limitSec);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setCounter((prevCounter) => {
        return prevCounter === 0 ? limitSec : prevCounter - 1;
      })
    }, 1000);

    return () => {
      clearInterval(timerId)
    };
  }, []);

  const reset = () => {
    setCounter(limitSec);
  };

  return [counter, reset];
};

const App: FC<{}> = () => {
  const [counter, reset] = useCounter(5);

  return (
    <Container>
      <Counter counter={counter} reset={reset}/>
    </Container>
  )
};

export default App;
