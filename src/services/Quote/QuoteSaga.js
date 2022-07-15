import { put, all, takeLatest, select } from 'redux-saga/effects';
import Api from '../../@common/api/Api';
import { quoteActions } from './QuoteSlice';

function* getQuoteRandom() {
  yield put(quoteActions.setLoading({ key: 'getQuoteRandom', value: true }))
  try {
    const response = yield Api.get('/quote-random')

    yield put(quoteActions.setState({
      key: 'quote',
      newState: response.payload
    }))

    yield put(quoteActions.setLoading({ key: 'getQuoteRandom', value: false }))
  } catch (error) {
    yield put(quoteActions.onError({ key: 'getQuoteRandom', error: error.toString() }))
  }
}

function* ActionWatcher() {
  yield takeLatest(quoteActions.getQuoteRandom, getQuoteRandom)
}

export default function* QuoteSaga() {
  yield all([
    ActionWatcher(),
  ]);
}
