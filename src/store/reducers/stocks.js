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
      return {
        ...state,
        loading: false,
        error: null,
        chart: action.payload.data.chart.chart,
        close: action.payload.data.iexRealtimePrice,
        open: action.payload.data.open,
        change: action.payload.data.change,
        changePercent: action.payload.data.changePercent,
        company: action.payload.data.companyName,
        sector: action.payload.data.company.sector,
        employees: action.payload.data.company.employees,
        ceo: action.payload.data.company.CEO,
        site: action.payload.data.company.website,
      }

    case 'GET_STOCK_FAILURE':
    return {
      ...INITIAL_STATE,
      error: action.payload.error
    }

    case 'GET_STOCK_NEWS_REQUEST':
      return { ...state, loading: true};

    case 'GET_STOCK_NEWS_SUCCESS':
      return { ...state, news: action.payload.data[0] }

    case 'GET_STOCK_NEWS_FAILURE':
      return {
        ...INITIAL_STATE,
        newsError: action.payload.error
      }

    default:
      return state;
  }
}
