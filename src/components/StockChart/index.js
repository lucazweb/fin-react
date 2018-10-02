import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { Grow } from 'react-preloading-component';
import { PreloaderBox }  from '../../css/common_components';
import { StockChartBox } from './styles';
import { connect } from 'react-redux';


const getWindowWidth = () => {
  let defaultWidth = 600;
  if(window.innerWidth < 1024)
    return window.innerWidth - 10
  return defaultWidth
}

const getWindowHeight = () => {
  return 300
}

const StockChart = ({stocks}) => (
  <Fragment>
    {stocks.loading && (<PreloaderBox><Grow size={40} color="#0047bb" /></PreloaderBox>)}
    {
      stocks.close !== null && (
        <StockChartBox initialPose={'exit'} pose={'enter'}>
            <LineChart width={getWindowWidth()} height={getWindowHeight()} margin={{top:5, left:0}} data={stocks.chart}>
              {/* <CartesianGrid /> */}
              <XAxis dataKey="label" />
              <YAxis dataKey="high" />
              <Tooltip />
              <Line type="monotone" dataKey="high" label="high" strokeWidth={2} stroke="#900" />
            </LineChart>
        </StockChartBox>
      )
    }
  </Fragment>
);

StockChart.propTypes = {
  stocks: PropTypes.shape({
    loading: PropTypes.bool,
    //error: PropTypes.oneOfType([null, PropTypes.string]),
    chart: PropTypes.arrayOf(PropTypes.shape({
      change: PropTypes.number,
      changeOverTime: PropTypes.number,
      changePercent: PropTypes.number,
      close: PropTypes.number,
      date: PropTypes.string,
      high: PropTypes.number,
      label: PropTypes.string,
      open: PropTypes.number,
      unadjustedVolume: PropTypes.number,
      volume: PropTypes.number,
      vwap: PropTypes.number,
    })),
    close: PropTypes.oneOfType([null, PropTypes.string]),
    open: PropTypes.oneOfType([null, PropTypes.string]),
    change: PropTypes.oneOfType([null, PropTypes.number]),
    changePercent: PropTypes.oneOfType([null, PropTypes.number]),
    company: PropTypes.string,
  }).isRequired
}

const mapStateToProps = state => ({
  stocks: state.stocks,
});

export default connect(mapStateToProps)(StockChart);
