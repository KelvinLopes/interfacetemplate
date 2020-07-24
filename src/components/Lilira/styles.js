import styled from 'styled-components';

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  padding: 0 20px 0 3px;
  background: none;
  min-heingth: 7vh;

  .help-lilira {

    display: none;
  }

  p {

    width: 100%;
    text-align: center;
    margin: 10px auto;
    color: #fff;
  }

  .card-lilira {

    display: none;
  }

  .resp-lilira {

    display: none;
  }


  img {

    height: 30vh;
    max-heigth: 70vh;
  }

  h5 {

    text-align: center;
    color: #fff;
    font-size: 16px;
    font-family: Roboto-Condensed;
  }

  .version-img-lilira {

    display: none;
    width: 35vw;
    heigth: 5vh;
    margin: 10px auto;
    background: rgba(0, 0, 0, 1);
    background-size: cover;
  }
`;

export const Card = styled.div`

  display: grid;
  grid-template-columns: repeat( atuo-fit, minmax(350px, 1fr) );
  grid-column-gap: 25px;
  grid-row-gap: 5px;
  grid-row-gap: 5px;
  width: 50vw;
  heigth: 7vh;
  margin: 50px auto;
  border-radius: 10px;
  background: rgba(0, 0, 0, 1);
  list-style: none;
  outiline: none;

  img {

    width: 20vw;
    height: 30vh;
  }

  .text-lilira {

    text-align: center;
    color: #fff;
    font-size: 16px;
    font-family: Roboto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

    .space {

    padding: 20px;
  }

`;

export const CardImg = styled.div`

  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: row;
  outiline: none;

  .lilira-img {

    width: 300px;
    max-width: 100%;
    heigth: 50vh;
    margin: 0 auto;
    flex: 1 0 auto;
    outiline: none;
  }

  @media screen and (max-width: 400px) {

    .lilira-img {

      width: 300px;
      max-width: 100%;
      heigth: 50vh;
      margin: 0 auto;
      flex: 1 0 auto;
    }
  }
`;

export const Form = styled.form`

  margin-top: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Input = styled.input`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: #0000;
  border-radius: 10px;
  outiline: none;
  border: 0;
  border-bottom: solid 1px green;
  font-family: roboto;
  font-size: 16px;
  weigth: bold;
  width: 40vw;
  heigth: 70vh;
  margin: 0 auto;
  position: relative;

  &::placeholder {

    color: orange;
    text-aling: center;
    font-size: 14px;
    font-family: ubuntu;
  }

`;

export const Description = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;

  p {

    color: #fff;
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    width: 100%;
    line-height: 2;
  }
`;

export const LinkCard = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;
  position: relative;
  margin: 10px;
  cursonr: pointer;

  a:link {
    text-decoration: none;
    color: #009aaa;
    margin-top: auto;
    padding: 30px;
    outiline: none;
  }

  a:active {
    color: #a24b;
  }

   a:visited {
    color: #009aaa;
  }

   a:hover {
    color: #adefef;
  }
`;

export const Header = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  heigth: 20vh;
  padding: 0;
  margin-top: 0;

  h1, h5  {

    color: green;
    font-size: 20px;
    text-align: center;
    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

`;
