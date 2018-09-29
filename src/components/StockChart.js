import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { StockChartBox  }  from '../css/components';
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
    <StockChartBox>
      <Legend />
      <LineChart width={600} height={300} margin={{top:5, left:0}} data={stocks.chart}>
        <CartesianGrid />
        <XAxis dataKey="label" />
        <YAxis />
        <Line type="monotone" dataKey="high" label="high" stroke="#900" />
      </LineChart>
    </StockChartBox>
);

const mapStateToProps = state => ({
  stocks: state.stocks,
});

export default connect(mapStateToProps)(StockChart);
