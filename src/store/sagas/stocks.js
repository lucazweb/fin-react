import { call, put } from 'redux-saga/effects';
//import api from '../../services/api';
import { apiv2 } from '../../services/api';
import { getStockSuccess, getStockFailure } from '../actions/stocks';

 export function* getStock(action){
   try{
     ///stock/{symbol}/company
    //const { data } = yield call(api.get, `/stock/${action.payload.symbol}/batch?types=quote,news,chart&range=1m&last=1`)
    const { data } = yield call(apiv2.get, `/stock/${action.payload.symbol}/quote?token=pk_4deaedf4f9ac4fa6a1497a59c2bb82d9`);
    const chart = yield call(apiv2.get, `/stock/${action.payload.symbol}/batch?types=chart&range=1m&last=10&token=pk_4deaedf4f9ac4fa6a1497a59c2bb82d9`);
    const company = yield call(apiv2.get, `/stock/${action.payload.symbol}/company?token=pk_4deaedf4f9ac4fa6a1497a59c2bb82d9`);
    // const priceTarget = yield call(apiv2.get, `/stock/${action.payload.symbol}/price-target?token=pk_4deaedf4f9ac4fa6a1497a59c2bb82d9`);
    // console.log('priceTarget: ', priceTarget);
    console.log(chart);
    data.company = company.data;
    data.chart = chart.data;

    yield put(getStockSuccess(data));
   }catch(err){
    yield put(getStockFailure('Oups! sem informações a exibir..'))
   }
 }
