const INITIAL_STATE = {
  symbol: '',
  loading: false,
  error: null,
  chart: [],
  stockdata: [],
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'GET_STOCK_REQUEST':
      return { ...state, loading: true};

    case 'GET_STOCK_SUCCESS':
    console.log(action.payload.data);
    console.log(action.payload.data.chart);
      return {...state,
        symbol: action.payload.data.quote.symbol,
        chart: action.payload.data.chart,
        stockdata: action.payload.data,
      }

    case 'GET_STOCK_FAILURE':
    return  Object.assign({}, ...state, {
      loading: false,
      error: action.payload.error,
    })

    default:
      return state;
  }
}
