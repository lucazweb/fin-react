import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stockActions from '../store/actions/stocks';

class StockInput extends Component{
  state = {
    symbol: ''
  };


  handleStockRequest(symbol){
    if(symbol.length >= 4){
      this.props.getStockRequest(symbol);
    }
  }

  render(){
    return (
      <div className="main-form">
        <input onChange={(e) => {this.handleStockRequest(e.target.value)}} className="main-input" placeholder="Ex. aapl" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  symbol: state.symbol,
});

const mapDispatchToProps = dispatch => bindActionCreators(stockActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StockInput);
