import styled from 'styled-components';

export const Content = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;
  max-width: 100vw;


`;


export const Header = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;
  max-width: 100vw;

  h1 {
    font-family: roboto;
    font-size: 48px;
    color:#039846;
    margin: 20px auto;
  }


img {

  width: 100%;
  height: 70vh;
  margin: 30px auto 0;
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

