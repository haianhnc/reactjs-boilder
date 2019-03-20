import { fork } from 'redux-saga/effects';
import dummy from './dummy';

export default function* root() {
  yield fork(dummy);
}