import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  StocksPanelBox } from './styles';
import { CompanyTitle } from '../../css/common_components';

const ResolvePercentMarkup = (number) => {
  if(number < 0)
    return (<span className="dow-markup"> ({ number } %) </span> );
  return (<span className="high-markup"> ({ number } %) </span> );
}

const ResolveChangeMarkup = (number) => {
  if(number < 0)
    return (<span className="dow-markup"> { number } </span> );
  return (<span className="high-markup"> { number } </span> );
}

const StockPanel = ({stocks}) => (
  <Fragment>
    <CompanyTitle pose={stocks.close !== null ? 'enter' : 'exit'} > {stocks.company} </CompanyTitle>
    <StocksPanelBox pose={stocks.close !== null ? 'enter' : 'exit'} >
      { ((stocks.error == null) && (stocks.close !== null)) && (
        <Fragment>
          <span className="stock-value">{stocks.close}</span>
          <span> { ResolveChangeMarkup(stocks.change) }{ ResolvePercentMarkup(stocks.changePercent) }</span>
        </Fragment>
      )}
    </StocksPanelBox>
  </Fragment>
);

StockPanel.propTypes = {
  stocks: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([null, PropTypes.string]),
    close: PropTypes.oneOfType([null, PropTypes.string]),
    change: PropTypes.oneOfType([null, PropTypes.number]),
    changePercent: PropTypes.oneOfType([null, PropTypes.number]),
    company: PropTypes.string,
  }).isRequired
};

const mapStateToProps = state => ({
  stocks: state.stocks,
});

export default connect(mapStateToProps)(StockPanel);
