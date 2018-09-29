import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { getStockSuccess, getStockFailure } from '../actions/stocks';

 export function* getStock(action){
   console.log(action);
   try{
    const { data } = yield call(api.get, `/stock/${action.payload.symbol}/batch?types=quote,news,chart&range=1m&last=1`)
    yield put(getStockSuccess(data));
   }catch(err){
    yield put(getStockFailure('Erro ao solicitar informações'))
   }


 }
