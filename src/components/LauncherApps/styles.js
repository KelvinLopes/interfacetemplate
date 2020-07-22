import styled from 'styled-components';

export const Aside = styled.div`

.laucher-apps {

  display: none;
}

  width: 100vw;
  height: 5vh;
  z-index: 1;
  outiline: none;
  left: 0;
  background: rbga(1, 1, 1, 1);
  top: 93vh;
  bottom: 0;
  position: fixed;

  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(350px, 1fr));
  grid-column-gap: 25px;
  grid-row-gap: 5px;
  max-width: auto;
  margin-top: 60px;

  border: solid 2px rgba(50, 150, 240, 0.10);

  section {

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
  top: 100px;
  positon: relative;
}

h5 {

  color: #fff;
}

.icone-img {

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

@media screen and (max-width: 320px) {

  ul {
    margin: 0 auto;
  }

  li {

    font-size: 10px;
  }

  .up-button {

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    top: auto;
    position: fixed;
    width: 100%;
    padding: 2px;
  }

  .down-button {

    display: none;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    top: auto;
    bottom: auto;
    position: fixed;
    width: 100%;
    padding: 2px;
  }
}

@media screen and (max-width: 568px) {

  grid: grid;
  grid-template-columns: repeat( auto-fit, minmax(350px, 1 fr));
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  margin: 0 auto;
  height: 100vh;

  ul {
    margin: 0 auto;
  }

  li {

    font-size: 0.8rem;
  }

  li span svg {

    display: flex;
    text-align: center;
    align-itmes: center;
    justify-content: center;
    margin: 0;
  }

  .up-button {

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    top: auto;
    position: fixed;
    width: 100%;
    height: 28px;
    padding: 2px;
  }

  .down-button {

    display: none;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    top: auto;
    bottom: auto;
    position: fixed;
    width: 100%;
    height: 28px;
    padding: 2px;
  }
}

@media screen and (max-width: 1024px) {

  margin: 0 auto;
  height: 100vh;

  ul {
    margin: 0 auto;
  }

  li {

    font-size: 0.8rem;
  }

  li span svg {

    display: flex;
    text-align: center;
    align-itmes: center;
    justify-content: center;
    margin: 0;
  }

  .up-button {

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    top: auto;
    position: fixed;
    width: 100%;
    height: 28px;
    padding: 2px;
  }

  .down-button {

    display: none;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    top: auto;
    bottom: auto;
    position: fixed;
    width: 100%;
    height: 28px;
    padding: 2px;
  }
}

@media screen and (max-width: 1366px) {

  margin: 0 auto;
  height: 100vh;

  ul {

    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));
    grid-column-gap: 15px;
    grid-row-gap: 25px;
    margin: 60px auto;
    max-width: 80vw;
    outiline: none;
  }

  li {

    user-select: none;
    list-style: none;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    margin: 0 auto;
    outline: none;
    width: auto;
  }

  li:nth-child(5) {
    margin-top: -8px;
  }

  li span svg {

    display: flex;
    text-align: center;
    align-itmes: center;
    justify-content: center;
    margin: 0;
  }

  .up-button {

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    top: auto;
    position: fixed;
    width: 100%;
    height: 28px;
    padding: 2px;
  }

  .down-button {

    display: none;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    top: auto;
    bottom: auto;
    position: fixed;
    width: 100%;
    height: 28px;
    padding: 2px;
  }

  a {

    text-decoration: none;
    color: #fff;
    cursor: pointer;
    outline: none;
  }

  a:visited {

    text-decoration
      text-decoration: none;
      color: #fff;
  }

  a:hover {

    text-decoration: none;
    color: green;
  }
}
`;

export const Input= styled.input`

  width: 70vw;
  height: 6vh;
  margin: 0 auto;
  position: relative;
  border: solid 2px green;
  outiline: none;

  display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.80);
  border-radius: 6px;
  font-size: 20px;
  color: #fff;
  font-family: ubuntu;
  padding-left: 15px;

  &&:placeholder {

    font-size: 20px;
    color: #fff;
    font-family: ubuntu;
  }
`;

export const ButtonsControl = styled.div`

  display: flex;
  flex-direction: row;
  align-itmes: center;
  justify-content: center;
  margin: calc(0, 25px);
  left: 0;
  right: 0;
  top: auto;
  bottom: 5px;
  padding: 10px;
  user-select: none;
  z-index: 1;

  @media screen and (max-width: 320px) {

    top: auto;
    bottom: 0;
    width: 100vw;
    height: 5vh;
  }

  @media screen and (max-width: 568px) {

    top: auto;
    bottom: 0;
    width: 100vw;
    height: 7vh;
  }
`;
