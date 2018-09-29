export const getStockRequest = symbol => ({
  type: 'GET_STOCK_REQUEST',
  payload: { symbol }
});

export const getStockSuccess = (data) => ({
  type: 'GET_STOCK_SUCCESS',
  payload: { data }
});
