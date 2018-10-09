import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { getStockNewsSuccess, getStockNewsFailure } from '../actions/stocks';

 export function* getNews(action){
   try{
    const { data } = yield call(api.get, `/stock/${action.payload.symbol}/news/last/1`)
    yield put(getStockNewsSuccess(data));
   }catch(err){
    yield put(getStockNewsFailure('Erro ao consultar notícias..'))
   }
 }
