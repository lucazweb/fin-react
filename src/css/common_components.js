import styled from 'styled-components';
import posed from 'react-pose';

const Intro = posed.div({
  enter: { height: 980, transition: {duration: 100}, delay: 250 },
  exit: { height: 220, transition: { duration: 150 }, delay: 100 },
});

const Fade = posed.h2({
  enter: { opacity: 1, delay: 500 },
  exit: { opacity: 0, transition: { duration: 200 } },
});

export const AppBox = styled(Intro)`
  display: flex;
  flex-direction: column;
  transition: all ease 0.6s;
  width: 700px;
  margin:50px auto;
  padding: 25px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #ccc;
  background: white;
  @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
    width: 90%;
  }

  h1{
    text-align: center;
    margin-bottom: 20px;
  }

`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  text-align:center;
  justify-content:center;
  align-items: center;
  background: #900;
  color: white;
  padding: 6px;
  margin-top:10px;
  font-size: 0.8em;
`;

export const CompanyTitle = styled(Fade)`
  text-align:center;
  margin-top: 20px;
  
  color: #333;
  font-weight: normal;
`;

export const PreloaderBox = styled.div`
  margin-top:0px;
`;
