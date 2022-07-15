import { put, all, takeLatest, select } from 'redux-saga/effects';
import ApiService from '../../@common/api/Api';
import { appActions } from './AppSlice';

function* ActionWatcher() {

}

export default function* AppSaga() {
  yield all([
    ActionWatcher(),
  ]);
}
