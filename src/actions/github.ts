import { AxiosError } from 'axios'
import { User } from '../services/github/model'
import * as ActionType from './githubContants'

interface GetMembersParams {
  companyName: string
}

interface GetMemberResult {
  users: User[]
}

export const getMembers = {
  start: (params: GetMembersParams) => ({
    type: ActionType.GET_MEMBERS_START as typeof ActionType.GET_MEMBERS_START,
    payload: params,
  }),

  succeed: (params: GetMembersParams, result: GetMemberResult) => ({
    type: ActionType.GET_MEMBERS_SUCCEED as typeof ActionType.GET_MEMBERS_SUCCEED,
    payload:  {params, result}
  }),

  fail: (params: GetMembersParams, error: AxiosError) => ({
    type: ActionType.GET_MEMBERS_FAIL as typeof ActionType.GET_MEMBERS_FAIL,
    payload: { params, error },
    error: true,
  }),
}

export type GithubAction =
  | ReturnType<typeof getMembers.start>
  | ReturnType<typeof getMembers.succeed>
  | ReturnType<typeof getMembers.fail>;
