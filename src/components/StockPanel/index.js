import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  StocksPanelBox } from './styles';
import { CompanyTitle } from '../../css/common_components';

const StockPanel = ({stocks}) => (
  <Fragment>
    <CompanyTitle> {stocks.company} </CompanyTitle>
    <StocksPanelBox>
      { ((stocks.error == null) && (stocks.close !== null)) && (
        <Fragment>
          <span className="stock-value">{stocks.close}</span>
          <span> {stocks.change }({stocks.changePercent}%) </span>
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
