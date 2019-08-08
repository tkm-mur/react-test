import React, { FC } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { add, increment, decrement } from '../../actions/counter';
import { CounterState } from '../../reducers/counter';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  add: (amount: number) => void;
}

const Counter: FC<CounterProps> = props => {
  // eslint-disable-next-line no-shadow
  const { count, add, increment, decrement } = props;

  return (
    <div>
      <h1>Counter</h1>

      <div>
        <p>Counter: {count}</p>
        <button type="button" onClick={increment}>
          +1
        </button>
        <button type="button" onClick={decrement}>
          -1
        </button>
        <button type="button" onClick={() => add(10)}>
          +10
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { counter: CounterState }) => {
  const { count } = state.counter;

  return {
    count,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      add,
      increment,
      decrement,
    },
    dispatch,
  );
};

// or...
// const mapDispatchToProps = { add, increment, decrement }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
