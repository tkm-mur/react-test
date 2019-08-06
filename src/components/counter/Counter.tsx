import React, {FC} from "react";
import {connect} from 'react-redux'
import {increment, decrement, add} from "../../actions/counter";
import {CounterState} from "../../reducers/counter";

export type CounterProps = {
  count: number,
  add: (amount: number) => void,
  decrement: () => void,
  increment: () => void
}

interface StateProps {
  count: number;
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

const mapStateToProps = (state: {counterReducer: CounterState}): StateProps => {
  return {
    count: state.counterReducer.count
  }
};

const mapDispatchToProps = { increment, decrement, add };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
