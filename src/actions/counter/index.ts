export const COUNTER_INCREMENT = 'COUNTER/INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER/DECREMENT';
export const COUNTER_ADD = 'COUNTER/ADD';

export const increment = () =>
  ({
    type: COUNTER_INCREMENT,
  } as const);

export const decrement = () =>
  ({
    type: COUNTER_DECREMENT,
  } as const);

export const add = (amount: number) =>
  ({
    type: COUNTER_ADD,
    payload: { amount },
  } as const);

/**
 * ここがポイント！！！！！！！
 * 各 Action Creator 関数の返り型を intersection types (交差型) にして 型宣言を行う
 * この型宣言はエクスポートして、Reducer 関数の第二引数の action の型とする。
 * */
export type CounterActionType =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof add>;
