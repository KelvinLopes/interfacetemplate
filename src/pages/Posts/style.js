import styled from 'styled-components';

export const Content = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;
  max-width: 100vw;
`;


export const StatusBar = styled.div`

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
export const Header = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;
  max-width: 100vw;
  top: 80px;


img {

  width: 100%;
  height: 70vh;
  margin: 80px auto 0;
  border-radius: 20px;
}
`;

export const Description = styled.div`

max-width: 700px;
height: 80vh;

p {
  font-family: roboto;
  font-size: 20px;
  color:#ffff;
  width: 100%;
  height: 50px;
  line-height: 1.5;
  padding: 0.8rem;

  text-align: left;
  margin-top: 18px;
  padding: 2rem;
}

`;

