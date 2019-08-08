import { Reducer } from 'redux';
import {
  CounterActionType,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_ADD,
} from '../actions/counter';

export interface CounterState {
  count: number;
}

const counter: Reducer<CounterState, CounterActionType> = (
  state: CounterState = { count: 0 },
  action: CounterActionType,
) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case COUNTER_ADD:
      return {
        ...state,
        count: state.count + action.payload.amount,
      };

    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-case-declarations
      const _: never = action;

      return state;
  }
};

export default counter;
