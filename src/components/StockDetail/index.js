import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StockDetailList } from './styles';
import { CompanyTitle } from '../../css/common_components';

const StockDetail = ({stocks}) => (
  <Fragment>
      <StockDetailList pose={ stocks.close !== null ? 'enter' : 'exit'} >
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
          <li>
              <strong>Employes</strong>
              <span>{stocks.employees}</span>
          </li>          
          <li>
              <strong>CEO</strong>
              <span>{stocks.ceo}</span>
          </li>          
          <li>
              <strong>Site</strong>
              <a className="company-site" target="_blank" href={stocks.site}>Acessar</a>
          </li>          
      </StockDetailList>
  </Fragment>
);

// StockDetail.propTypes = {
//   stocks: PropTypes.shape({
//     loading: PropTypes.bool,
//     error: PropTypes.string,
//     close: PropTypes.number,
//     open: PropTypes.number,
//     change: PropTypes.number,
//     changePercent: PropTypes.number,
//     company: PropTypes.string,
//   }).isRequired
// };

const mapStateToProps = function(state){
 return {
   stocks: state.stocks,
 } 
}

export default connect(mapStateToProps)(StockDetail);
