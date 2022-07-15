import { fork, all } from 'redux-saga/effects'
import AppSaga from '../services/App/AppSaga'
import QuoteSaga from '../services/Quote/QuoteSaga'

export default function* rootSaga() {
  yield all([
    fork(QuoteSaga),
    fork(AppSaga)
  ])
}