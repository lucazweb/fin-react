import styled from 'styled-components';
import posed from 'react-pose';

const Intro = posed.ul({
  enter: { opacity: 1, delay: 800 },
  exit: { opacity: 0, transition: { duration: 200 } },
});

export const StockDetailList = styled(Intro)`
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
