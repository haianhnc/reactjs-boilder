import { put, call, fork, takeLatest } from 'redux-saga/effects';

import {DUMMY_FETCH_DATA, DUMMY_SET_DATA} from '../constants/dummy';
import * as services from '../services/dummy';
import * as actions from '../actions/dummy';

function normalizeDummyData(data) {
  const res = {
    id: data.id,
    image: data.image,
    description: data.description,
    msg: data.msg,
  };
  return res;
}

function* fetchData(action) {
  try {
    const res = yield call(services.fetchData, action.id);
    const normalizedData = normalizeDummyData(res.data);
    if(normalizedData.id) {
      yield put(actions.setData(normalizedData));
    } else {
      // do some logic
    }

  } catch(error) {
    action.onError(error);
  } finally {
    action.onLoading(false);
  }
}

function* watchFetchData() {
  yield takeLatest(DUMMY_FETCH_DATA, fetchData);
}

export default function* dummy() {
  yield fork(watchFetchData);
}