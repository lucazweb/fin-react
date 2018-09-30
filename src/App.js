import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Wrapper from './components/Wrapper';

import './css/global';


const App = () =>  (
      <Provider store={store}>
        <Wrapper />
      </Provider>
);

export default App;
