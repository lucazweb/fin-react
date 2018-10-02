import styled from 'styled-components';

export const StockInputBox = styled.div`
  input{
    width: 100%;
    transition: all ease 0.6s;
    box-shadow: inset 0 1px 1px rgba(10,10,10,.1);
    font-size: 1.1em;
    color: #666;
    text-align: center;
    padding: 10px 8px;
    background: #fbfbfb;
    border: 1px solid transparent;
    border-bottom-color: #f3f3f3;
    border-radius: 3px;

    &::placeholder{
      color: #999;
    }

    &:hover{
      background: #fff1b880;
    }

    &:focus{
      border-color: #069;
      background: white;
      box-shadow: inset 0 1px 1px rgba(10,10,10,.1);
      border: 1px solid rgba(10,10,10,.1);
      /* box-shadow: 2px 1px 3px #ccc; */
    }
  }
`;
