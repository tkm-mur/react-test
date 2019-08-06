import {Reducer} from 'redux';
import {CounterActionType, CounterAction} from '../actions/counter';

export type CounterState = {
  count: number
}

const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = {count: 0},
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: {...state}.count + 1
      };

    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: {...state}.count - 1
      };

    case CounterActionType.ADD:
      return {
        ...state,
        count: {...state}.count + (action.amount || 0)
      };

    default:
      return state;
  }
};

export default counterReducer;
