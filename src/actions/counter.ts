export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';
export const ADD = 'COUNTER/ADD';

export const increment = () => {
  return {
    type: INCREMENT
  } as const;
};

export const decrement = () => {
  return {
    type: DECREMENT
  } as const;
};

export const add = (value: number) => {
  return {
    type: ADD,
    payload: {amount: value}
  } as const;
};

export type CounterAction =
  | ReturnType<typeof add>
  | ReturnType<typeof decrement>
  | ReturnType<typeof increment>;
