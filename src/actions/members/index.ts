import { AxiosError } from 'axios';

export const GET_MEMBERS_START = 'GITHUB/GET_MEMBERS_START';
export const GET_MEMBERS_SUCCEED = 'GITHUB/GET_MEMBERS_SUCCEED';
export const GET_MEMBERS_FAIL = 'GITHUB/GET_MEMBERS_FAIL';

interface GetMembersParams {
  companyName: string;
}

export const getMemberStart = (params: GetMembersParams) =>
  ({
    type: GET_MEMBERS_START,
    payload: params,
  } as const);

export const getMemberSucceed = (
  params: GetMembersParams,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: { users: any[] },
) =>
  ({
    type: GET_MEMBERS_SUCCEED,
    payload: { params, result },
  } as const);

export const getMemberFail = (params: GetMembersParams, error: AxiosError) =>
  ({
    type: GET_MEMBERS_FAIL,
    payload: { params, error },
    error: true,
  } as const);

export type GetMembersAction =
  | ReturnType<typeof getMemberStart>
  | ReturnType<typeof getMemberSucceed>
  | ReturnType<typeof getMemberFail>;
