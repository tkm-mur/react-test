import {Reducer} from 'redux';
import {INCREMENT, DECREMENT, ADD, CounterAction} from '../actions/counter';

export type CounterState = {
  count: number
}

const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = {count: 0},
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: {...state}.count + 1
      };

    case DECREMENT:
      return {
        ...state,
        count: {...state}.count - 1
      };

    case ADD:
      return {
        ...state,
        count: {...state}.count + action.payload.amount
      };

    default:
      return state;
  }
};

export default counterReducer;
