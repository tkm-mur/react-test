export interface Action<Payload> {
  type: string;
  payload?: Payload;
  error?: boolean;
  meta?: { [key: string]: any } | null;
}

export interface ActionStart<ActionType, Params> {
  type: ActionType;
  payload?: Params;
  meta?: { [key: string]: any } | null;
}

export interface ActionSucceed<ActionType, Params, Result> {
  type: ActionType;
  payload: {
    params: Params;
    result: Result;
  };
  meta?: { [key: string]: any } | null;
}

export interface ActionFail<ActionType, Params, AnyError> {
  type: ActionType;
  payload: {
    params: Params;
    error: AnyError;
  };
  error: boolean;
  meta?: { [key: string]: any } | null;
}
