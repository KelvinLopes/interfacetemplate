import styled from 'styled-components';

const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  background: #282a36;
  flex-wrap: wrap;

  h1 {
    font-family: roboto;
    font-size: 20px;
    color:#039846;
  }

@media screen and (max-width: 300px){

ul {

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex: 1 0 auto;
  }
}
`;

export default Container;
