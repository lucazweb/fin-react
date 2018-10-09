export const getStockRequest = symbol => ({
  type: 'GET_STOCK_REQUEST',
  payload: { symbol }
});

export const getStockSuccess = (data) => ({
  type: 'GET_STOCK_SUCCESS',
  payload: { data }
});

export const getStockFailure = error => ({
  type: 'GET_STOCK_FAILURE',
  payload: { error }
});


export const getStockNewsRequest = symbol => ({
  type: 'GET_STOCK_NEWS_REQUEST',
  payload: { symbol }
});

export const getStockNewsSuccess = data => ({
  type: 'GET_STOCK_NEWS_SUCCESS',
  payload: { data }
});

export const getStockNewsFailure = error => ({
  type: 'GET_STOCK_NEWS_SUCCESS',
  payload: { error }
});
