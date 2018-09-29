import { createStore, compose, applyMiddleware } from 'redux';
import createSagamiddleware from 'redux-saga';

import reducers from './reducers';
//import sagas from './sagas';

// Meus middlewares
const middlewares = [];

const sagaMiddleware = createSagamiddleware();

middlewares.push(sagaMiddleware);

const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;
