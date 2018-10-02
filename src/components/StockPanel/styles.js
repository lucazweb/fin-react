import styled from 'styled-components';
import posed from 'react-pose';

const Intro = posed.div({
  enter: { opacity: 1, height:'auto', delay: 250 },
  exit: { opacity: 0, height:0, transition: { duration: 200 } },
});

export const StocksPanelBox = styled(Intro)`
  display: flex;
  width: 70%;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  margin:20px auto;
  @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
    flex-direction: column;
    align-items: center;
  }
  span{
    font-size: 1.8em;
    color: #409040;
    letter-spacing: 0.2px;
  }

  .dow-markup, .high-markup{
    color: #900;
    font-size:0.8em;
    background: #f9edef;
    margin-right:4px;
  }

  .high-markup{
    color: #409040;
    background: #f1fdf1;
  }

  .stock-value{
    font-size: 2.8em;
    color: #333;
    font-weight: bold;
    margin-right: 4px;
    margin-bottom: -7px;
  }
`;
