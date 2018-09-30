import styled from 'styled-components';
import posed from 'react-pose';

const Intro = posed.div({
  enter: { opacity: 1, delay: 500 },
  exit: { opacity: 0, transition: { duration: 100 } }
});

export const StockChartBox = styled(Intro)`
  display: flex;
  opacity:0;
  width: 100%;
  /* transition: all ease 0.5s; */
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
