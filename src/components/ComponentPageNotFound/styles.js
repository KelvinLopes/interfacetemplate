import styled from 'styled-components';

export const Content = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 100vw;
  margin: 20px auto;

  h1 {
    color: green;
    font-size: 48px;
    text-align: center;
  }

  p {

    color: #fff;
    font-size: 18px;
    text-align: center;
    font-weigth: 700;

    width: 30vw;
  }

  .error-img {

    width: 320px;
    heigth: 320px;
    margin: 0 auto;
    flex: 1 0 auto;
  }

  @media screen and (320px) {

    width: 100vw;
    margin: 0;
  }
`;
