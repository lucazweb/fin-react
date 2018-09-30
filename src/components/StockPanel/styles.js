import styled from 'styled-components';
import posed from 'react-pose';

const Intro = posed.div({
  enter: { opacity: 1, delay: 500 },
  exit: { opacity: 0, transition: { duration: 200 } },
});

export const StocksPanelBox = styled(Intro)`
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
