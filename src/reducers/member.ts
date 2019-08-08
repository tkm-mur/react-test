import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import {
  GetMembersAction,
  GET_MEMBERS_START,
  GET_MEMBERS_SUCCEED,
  GET_MEMBERS_FAIL,
} from '../actions/members';

export interface GetMemberState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users: any[];
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: GetMemberState = {
  users: [],
  isLoading: false,
};

const getMember: Reducer<GetMemberState, GetMembersAction> = (
  state: GetMemberState = initialState,
  action: GetMembersAction,
): GetMemberState => {
  switch (action.type) {
    case GET_MEMBERS_START:
      return {
        ...state,
        users: [],
        isLoading: true,
      };

    case GET_MEMBERS_SUCCEED:
      return {
        ...state,
        users: action.payload.result.users,
        isLoading: false,
      };

    case GET_MEMBERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-case-declarations
      const _: never = action;

      return state;
  }
};

export default getMember;
