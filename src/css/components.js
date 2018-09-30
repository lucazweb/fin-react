import styled from 'styled-components';

export const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  min-height: 400px;
  margin:100px auto;
  padding: 25px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 2px 1px 2px #ccc;
  background: white;

  h1{
    text-align: center;
    margin-bottom: 20px;
  }

  input{
    width: 100%;
    transition: all ease 0.6s;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
    font-size: 1.2em;
    color: #6699cc;
    text-align: center;
    padding: 10px 8px;
    border: 2px solid #0047bb;
    border-radius: 3px;
    &:focus{
      border-color: #069;
      background: white;
      box-shadow: 2px 2px 10px #999;
    }
`;

export const StocksPanelBox = styled.div`
  display: flex;
  width: 70%;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  margin:20px auto;

  span{
    font-size: 1.8em;
    color: #669966;
    letter-spacing: 0.2px;

  }

  .stock-value{
    font-size: 2.8em;
    color: #0047bb;
    font-weight: bold;
    margin-right: 2px;
  }
`;

export const StockDetailList = styled.ul`
  display:flex;
  flex-flow: row wrap;
  width: 100%;
  list-style: none;

  li{
    width: 28%;
    margin: 2%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-top: 15px;
    padding-bottom:5px;
    font-size: 0.8em;

    &:hover{
      color: #6699cc;
      border-color: #6699cc;
    }
  }

`;

export const StockChartBox = styled.div`
  display: flex;
  width: 100%;
  transition: all ease 0.5s;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  margin-top: 10px;
  padding: 40px 40px 40px 20px;
  border: 8px solid #f3f3f3;
  border-radius: 4px;
  svg{
    font-size: 12px;
  }
`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  text-align:center;
  justify-content:center;
  align-items: center;
  background: #f3f3f3;
  padding: 6px;
  margin-top:10px;
  font-size: 0.8em;
`;

export const CompanyTitle = styled.h2`
  text-align:center;
  margin-top: 20px;
  margin-bottom: 0px;
  color: #333;
  font-weight: normal;
`;

export const PreloaderBox = styled.div`
  margin-top:30px;
`;
