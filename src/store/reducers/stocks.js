const INITIAL_STATE = {
  loading: false,
  error: null,
  newsError: null,
  chart: [],
  close: null,
  open: null,
  change: null,
  changePercent: null,
  company: null,
  sector: null,
  news: {},
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'GET_STOCK_REQUEST':
      return { ...state, loading: true};

    case 'GET_STOCK_SUCCESS':
    console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        error: null,
        chart: action.payload.data.chart,
        close: action.payload.data.quote.close,
        open: action.payload.data.quote.open,
        change: action.payload.data.quote.change,
        changePercent: action.payload.data.quote.changePercent,
        company: action.payload.data.quote.companyName,
        sector: action.payload.data.quote.sector,
      }

    case 'GET_STOCK_FAILURE':
    console.log(action.payload.error);
    return {
      ...INITIAL_STATE,
      error: action.payload.error
    }

    case 'GET_STOCK_NEWS_REQUEST':
      return { ...state, loading: true};

    case 'GET_STOCK_NEWS_SUCCESS':
      console.log(action.payload.data);
      return { ...state, news: action.payload.data[0] }

    case 'GET_STOCK_NEWS_FAILURE':
      console.log(action.payload.error);
      return {
        ...INITIAL_STATE,
        newsError: action.payload.error
      }



    default:
      return state;
  }
}
