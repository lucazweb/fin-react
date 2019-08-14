import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { Eye  } from 'react-preloading-component';
import { PreloaderBox }  from '../../css/common_components';
import { StockChartBox } from './styles';
import { connect } from 'react-redux';


const getWindowWidth = () => {
  let defaultWidth = 600;
  if(window.innerWidth < 1024)
    return window.innerWidth - 65
  return defaultWidth
};

const getWindowHeight = () => {
  let defaultHeight = 300;
  return defaultHeight;
};


const getChartStroke = (number) => {
  if(number < 0){
    return "#900"
  } else {
    return "green"
  }
};

const StockChart = ({stocks}) => (
  <Fragment>
    {stocks.loading && (<PreloaderBox><Eye size={40} color="#0047bb" /></PreloaderBox>)}
    {
      stocks.close !== null && (
        <StockChartBox initialPose={'exit'} pose={'enter'}>
            <LineChart width={getWindowWidth()} height={getWindowHeight()} margin={{top:5, left:0}} data={stocks.chart}>
              <XAxis dataKey="label" />
              <YAxis dataKey="high" />
              <Tooltip />
              <Line type="monotone" dataKey="high" label="high" strokeWidth={2} stroke={getChartStroke(stocks.change)} />
            </LineChart>
        </StockChartBox>
      )
    }
  </Fragment>
);

// StockChart.propTypes = {
//   stocks: PropTypes.shape({
//     loading: PropTypes.bool,
//     chart: PropTypes.arrayOf(PropTypes.shape({
//       change: PropTypes.number,
//       changeOverTime: PropTypes.number,
//       changePercent: PropTypes.number,
//       close: PropTypes.number,
//       date: PropTypes.string,
//       high: PropTypes.number,
//       label: PropTypes.string,
//       open: PropTypes.number,
//       unadjustedVolume: PropTypes.number,
//       volume: PropTypes.number,
//       vwap: PropTypes.number,
//     })),
//     close: PropTypes.number,
//     open: PropTypes.number,
//     change: PropTypes.number,
//     changePercent: PropTypes.number,
//     company: PropTypes.string,
//   }).isRequired
// }

const mapStateToProps = function(state){
 return{
   stocks: state.stocks,
   chart: state.stocks.chart.chart
 } 
};

export default connect(mapStateToProps)(StockChart);
