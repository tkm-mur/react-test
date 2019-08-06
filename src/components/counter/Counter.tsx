import React, {FC} from "react";

export type CounterProps = {
  count: number,
  add: (amount: number) => void,
  decrement: () => void,
  increment: () => void
}

const Counter: FC<CounterProps> = props => {
  const {count, add, increment, decrement} = props;

  return (
    <div>
      <div>Count {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={() => add(10)}>+10</button>
    </div>
  )
};

export default Counter;
