import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { getStockSuccess } from '../actions/stocks';

 export function* getStock(action){
   const { data } = yield call(api.get, `/stock/${action.payload.symbol}/batch?types=quote,news,chart&range=1m&last=1`)
   const stock = data;

   yield put(getStockSuccess(data));
 }
