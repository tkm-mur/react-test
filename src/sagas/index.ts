import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getMembersFactory } from '../service/github/api';
import {
  getMemberStart,
  getMemberSucceed,
  getMemberFail,
  GET_MEMBERS_START,
} from '../actions/members';

// Action Type が GET_MEMBERS_START である Action を引数として指定
function* runGetMembers(action: ReturnType<typeof getMemberStart>) {
  const { companyName } = action.payload;

  try {
    const api = getMembersFactory();
    const users = yield call(api, companyName);

    console.log(users)

    yield put(getMemberSucceed({ companyName }, { users }));
  } catch (error) {
    yield put(getMemberFail({ companyName }, error));
  }
}

/**
 * Action Type が GET_MEMBERS_START である Action を待ち続けて、
 * Action Type が GET_MEMBERS_START である Action を待ち続けて、
 */
export function* watchMembers() {
  yield takeLatest(GET_MEMBERS_START, runGetMembers);
}

export default function*() {
  yield all([fork(watchMembers)]);
}
