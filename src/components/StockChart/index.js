import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { Grow } from 'react-preloading-component';
import { PreloaderBox }  from '../../css/common_components';
import { StockChartBox } from './styles';
import { connect } from 'react-redux';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const StockChart = ({stocks}) => (
  <Fragment>
    {stocks.loading && (<PreloaderBox><Grow size={40} color="#0047bb" /></PreloaderBox>)}
    {
      stocks.close !== null && (
        <StockChartBox initialPose={'exit'} pose={'enter'}>
            <LineChart width={600} height={300} margin={{top:5, left:0}} data={stocks.chart}>
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
