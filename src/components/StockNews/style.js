import styled from 'styled-components';
import posed from 'react-pose';

const Intro = posed.div({
  enter: { opacity: 1, delay: 500 },
  exit: { opacity: 0, transition: { duration: 100 } }
});

export const NewsBox = styled(Intro)`

  display:flex;
  flex-direction: column;
  width:100%;
  padding:10px;
  background: white;
  border: 1px solid #ccc;
  margin: 10px auto;
  min-height:300px;
    .headline{
      display:flex;
      justify-content: left;
      max-height: 180px;
      align-items: center;
      border-bottom: 1px solid #069;
      padding:20px 10px 20px 10px;
      font-weight: bold;
      font-size: 0.8em;
      h2{
        margin-right: 10px;
      }
    }
    .news-body{
      margin-bottom: 30px;
    }
    .news-body, .news-footer{
      display:flex;
      padding: 10px;
      a{
        text-decoration:none;
        &:hover{
          text-decoration:underline;
        }
      }
      em{
        color: #069;
      }
      img{
        width: 200px;
        height: 100px;
        margin: 10px
      }
    }

    .news-footer{
      width: 100%;
      flex-direction: column;
      border-top: 1px solid #ccc;
      padding-bottom: 10px;

      ul{
        width: 100%;
        float:left;
        padding-bottom: 10px;
        li{
        float:left;
        list-style: none;
        margin-right: 10px;
        }
      }
    }

    }
`;
