import React from 'react';
import { StocksPanelBox } from '../css/components';

const StockPanel = () => (
  <StocksPanelBox>
    <span className="stock-value">224.95</span>
    <span> + 4.53 (+2.06%) </span>
  </StocksPanelBox>
);

export default StockPanel;
