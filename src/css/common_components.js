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
