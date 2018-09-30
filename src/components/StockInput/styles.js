import styled from 'styled-components';

export const StockInputBox = styled.div`
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
  }
`;
