import React, {FC} from "react";

export type AppProps = {
  counter: number,
  reset: () => void
};

const App: FC<AppProps> = props => {
  const {counter, reset} = props;
  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={reset}>Reset</button>
    </>
  )
};

export default App;
