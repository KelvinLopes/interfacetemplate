import styled from 'styled-components';

const StatusBar = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100vw;
  height: 10vh;
  background: rgba(33, 34, 44, 0.8);

  top: 0;

  position: fixed;

  h1 {
    font-family: roboto;
    font-size: 48px;
    color:#039846;
    margin: 65px auto;
    text-align: center;
  }

`
;

export default StatusBar;
