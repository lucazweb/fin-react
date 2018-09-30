import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StockDetailList } from './styles';
import { CompanyTitle } from '../../css/common_components';

const StockDetail = ({stocks}) => (
  <Fragment>
  {
    stocks.close !== null  && (
      <StockDetailList initalPose={'exit'} pose={'enter'} >
          <li>
              <strong>Segmento</strong>
              <span>{stocks.sector}</span>
          </li>
          <li>
              <strong>Abrir</strong>
              <span>{stocks.open}</span>
          </li>
          <li>
              <strong>Variação</strong>
              <span>{stocks.change}</span>
          </li>
      </StockDetailList>
    )
  }

  </Fragment>
);

StockDetail.propTypes = {
  stocks: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([null, PropTypes.string]),
    close: PropTypes.oneOfType([null, PropTypes.string]),
    open: PropTypes.oneOfType([null, PropTypes.string]),
    change: PropTypes.oneOfType([null, PropTypes.number]),
    changePercent: PropTypes.oneOfType([null, PropTypes.number]),
    company: PropTypes.string,
  }).isRequired
};

const mapStateToProps = state => ({
  stocks: state.stocks,
})

export default connect(mapStateToProps)(StockDetail);
