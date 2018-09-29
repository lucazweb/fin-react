import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import StockInput from './components/StockInput';
import StockPanel from './components/StockPanel';
import StockDetail from './components/StockDetail';
import StockChart from './components/StockChart';
import './css/global';
import { AppBox } from './css/components';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppBox>
          <div className="header">
            <h1> Fin.React</h1>
          </div>

          <StockInput />

          <StockPanel />

          <StockDetail />

          <StockChart />
        </AppBox>
      </Provider>



    );
  }
}

export default App;
