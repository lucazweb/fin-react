import React, { Component } from 'react';

export default class StockInput extends Component{
  state = {};

  render(){
    return (
      <div className="main-form">
        <input className="main-input" placeholder="Ex. aapl" />
      </div>
    );
  }
}
