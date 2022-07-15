import { put, all, takeLatest, select } from 'redux-saga/effects';
import ApiService from '../../@common/api/Api';
import { quoteActions } from './QuoteSlice';

function* ActionWatcher() {

}

export default function* QuoteSaga() {
  yield all([
    ActionWatcher(),
  ]);
}
