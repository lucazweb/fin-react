import React, { Component } from 'react';
import StockInput from './components/StockInput';
import StockPanel from './components/StockPanel';
import StockDetail from './components/StockDetail';
import StockChart from './components/StockChart';
import './css/global';
import { AppBox } from './css/components';

class App extends Component {
  render() {
    return (
        <AppBox>
          <div className="header">
            <h1> Fin.React</h1>
          </div>

          <StockInput />

          <StockPanel />

          <StockDetail />

          <StockChart />

        </AppBox>


    );
  }
}

export default App;
