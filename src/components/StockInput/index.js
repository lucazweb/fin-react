import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stockActions from '../../store/actions/stocks';
import { Message } from '../../css/common_components';
import { StockInputBox } from './styles';

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
      <StockInputBox>
        <input onChange={(e) => {this.handleStockRequest(e.target.value)}} className="main-input" placeholder="Insira um símbolo de companhia, ex. aapl.. fb.." />

        {this.props.stocks.error !== null &&
          (<Message> {this.props.stocks.error }</Message>)
        }
      </StockInputBox>

    );
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks,
});

const mapDispatchToProps = dispatch => bindActionCreators(stockActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StockInput);
