import styled from 'styled-components';

export const Content = styled.div`

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

  width: 100vw;
  height: 70vh;
  margin: 30px auto 0;
  filter: opacity(50%);
  box-shadow: 1px 2px 20px 5px #fff;
}
`;


export const Docker = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;



  h1 {
    font-family: roboto;
    font-size: 48px;
    color:#039846;
    margin: 20px auto;
  }
`;

export const UlDocker = styled.ul`

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex: 1 0 auto;

    margin: 20px;
    border-bottom: solid 5px #009aaa;
    overflow: touch;
    -webkit-overflow-scrolling-x: auto;



  h1 {
    font-family: roboto;
    font-size: 48px;
    color:#039846;
    margin: 20px auto;
  }
`;

export const LiDocker = styled.li`

  /*display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-gap: 20px;
  grid-row-gap: 25px;
  grid-column-gap: 50px;
  flex: 1 0 auto;
  border-radius: 50px;
  background: orange;
  margin: 1px 5px auto;
  width: 200px;
  height: 50px;*/

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 0 auto;
  border-radius: 50px;
  background: orange;
  margin: 1px 5px auto;
  width: 200px;
  height: 50px;
  list-style: none;

cursor: pointer;


  h6 {
    font-family: roboto;
    font-size: 15px;
    color:#009aaa;
    margin: 20px auto;
    left: 0;
    right: 0;
    text-align: center;
    position: relative;
    font-weight: 700;


  }

`;
