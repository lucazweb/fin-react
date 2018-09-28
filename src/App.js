import React, { Component } from 'react';
import './css/global';
import { AppBox, StocksPanel, StockDetail, StockChart } from './css/components';

class App extends Component {
  render() {
    return (
        <AppBox>
          <div className="header">
            <h1> Fin.React</h1>
          </div>

          <div className="main-form">
            <input className="main-input" placeholder="Ex. aapl" />
          </div>

          <StocksPanel>
            <span className="stock-value">224.95</span>
            <span> + 4.53 (+2.06%) </span>
          </StocksPanel>

          <StockDetail>
            <li>
                <strong>Open</strong>
                <span>220.42</span>
            </li>
            <li>
                <strong>Bid</strong>
                <span>220.42</span>
            </li>
            <li>
                <strong>Ask</strong>
                <span>220.42</span>
            </li>
            <li>
                <strong>Open</strong>
                <span>220.42</span>
            </li>
            <li>
                <strong>Open</strong>
                <span>220.42</span>
            </li>
          </StockDetail>

          <StockChart />



        </AppBox>


    );
  }
}

export default App;
