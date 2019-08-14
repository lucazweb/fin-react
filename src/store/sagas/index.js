import { all, takeLatest } from 'redux-saga/effects';
import { getStock } from './stocks';

export default function* rootSaga(){
  yield all([
    takeLatest('GET_STOCK_REQUEST', getStock),
  ])
}
