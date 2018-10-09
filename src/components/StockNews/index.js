import React, { Fragment } from 'react';
import moment from 'moment';
import { NewsBox } from './style';
import { connect } from 'react-redux';


const handleData = (date) => {
  console.log(date);
  return moment(date).format('DD-MM-YYYY');
}

const StockNews = ({stocks}) => (
  <Fragment>
    {
      stocks.close !== null && (
        <NewsBox initialPose={'exit'} pose={'enter'}>
        <div className="headline">
          <h2> {stocks.news.headline} <small> { handleData(stocks.news.datetime) } </small> </h2>
        </div>
        <div className="news-body">
          <img src="https://www.oseudinheirovalemais.com.br/wp-content/uploads/2017/10/06-10-investimento-bolsa-valores.png" />
          <p>
            {stocks.news.summary}

            <a href={stocks.news.url}> <em> {stocks.news.source}</em></a>
          </p>

        </div>
        <div className="news-footer">
          <ul>
              <li> {stocks.news.related}</li>

            </ul>
        </div>
      </NewsBox>
      )
    }

  </Fragment>
);

const mapStateToProps = state => ({
  stocks: state.stocks,
});


export default connect(mapStateToProps)(StockNews);
