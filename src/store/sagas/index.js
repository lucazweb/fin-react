import { all, takeLatest } from 'redux-saga/effects';

import { getStock } from './stocks';
import { getNews } from './news';

export default function* rootSaga(){
  yield all([
    takeLatest('GET_STOCK_REQUEST', getStock),
    takeLatest('GET_STOCK_NEWS_REQUEST', getNews),

  ])
}
