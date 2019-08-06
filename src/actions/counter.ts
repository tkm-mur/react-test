export enum CounterActionType {
  INCREMENT = 'COUNTER/INCREMENT',
  DECREMENT = 'COUNTER/DECREMENT',
  ADD = 'COUNTER/ADD'
}

export type CounterAction = {
  type: string,
  amount?: number
}

export const increment = ():CounterAction => {
  return {
    type: CounterActionType.INCREMENT
  }
};

export const decrement = ():CounterAction => {
  return {
    type: CounterActionType.DECREMENT
  }
};

export const add = (value: number):CounterAction => {
  return {
    type: CounterActionType.ADD,
    amount: value
  }
};
