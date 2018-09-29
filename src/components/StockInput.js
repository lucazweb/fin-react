import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stockActions from '../store/actions/stocks';

class StockInput extends Component{
  static propTypes = {
    symbol: PropTypes.string,
    getStockRequest: PropTypes.func.isRequired,
  }

  state = {
    symbol: '',
    error: null
  };

  handleStockRequest(symbol){
    this.props.getStockRequest(symbol);
  }

  render(){
    return (
      <div className="main-form">
        <input onChange={(e) => {this.handleStockRequest(e.target.value)}} className="main-input" placeholder="Ex. aapl" />
        {!!this.props.stocks.error &&
          (<span style={{color:  '#900'}}> {this.props.error} </span>)
        }
      </div>

    );
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks,
});

const mapDispatchToProps = dispatch => bindActionCreators(stockActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StockInput);
