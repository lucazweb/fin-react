import styled from 'styled-components';

export const StockInputBox = styled.div`
  input{
    width: 100%;
    transition: all ease 0.6s;
    box-shadow: inset 0 1px 1px rgba(10,10,10,.1);
    font-size: 1.2em;
    color: #6699cc;
    text-align: center;
    padding: 10px 8px;
    background: #f3f3f3;
    border: 1px solid transparent;
    border-radius: 3px;
    &:focus{
      border-color: #069;
      background: white;
      box-shadow: inset 0 1px 1px rgba(10,10,10,.1);
      border: 1px solid rgba(10,10,10,.1);
      /* box-shadow: 2px 1px 3px #ccc; */
    }
  }
`;
