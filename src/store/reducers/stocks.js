const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action){
  switch(action.type){

    case 'GET_STOCK_SUCCESS':
      console.log(action.payload.data);

    default:
      return state;
  }
}
