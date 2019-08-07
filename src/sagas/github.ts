import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from '../actions/githubContants'
import { getMembers } from '../actions/github'
import { getMemberFactory } from '../services/github/api'

function * runGetMembers (action: ReturnType<typeof getMembers.start>) {
  const { companyName } = action.payload

  try {
    const api = getMemberFactory()
    const users = yield call(api, companyName)

    yield put(getMembers.succeed({ companyName }, { users }))
  } catch (e) {
    yield put(getMembers.fail({ companyName }, e))
  }
}

export function * watchGetMembers () {
  yield takeLatest(ActionTypes.GET_MEMBERS_START, runGetMembers)
}

export default function * rootSaga () {
  yield all([fork(watchGetMembers)])
}
