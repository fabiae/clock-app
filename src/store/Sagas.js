import { fork, all } from 'redux-saga/effects'
import QuoteSaga from '../services/Quote/QuoteSaga'

export default function* rootSaga() {
  yield all([
    fork(QuoteSaga)
  ])
}