import React from 'react';
import { connect } from 'react-redux';
import StockInput from './StockInput/';
import StockPanel from './StockPanel/';
import StockDetail from './StockDetail/';
import StockChart from './StockChart/';
import { AppBox } from '../css/common_components';

const Wrapper = ({stocks}) => (
  <AppBox pose={ stocks.close !== null ? 'enter' : 'exit'}>
    <div className="header">
      <h1> Fin.React</h1>
    </div>

    <StockInput />
    <StockPanel />
    <StockDetail />
    <StockChart />
  </AppBox>
);

const mapStateToProps = state => ({
  stocks: state.stocks,
});

export default connect(mapStateToProps)(Wrapper);
