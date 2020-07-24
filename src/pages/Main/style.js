import styled from 'styled-components';

export const Content = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100vw;
  min-height: 100vh;
  background: #1f2531;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  margin: 0 auto;


  h1 {
    font-family: roboto;
    font-size: 48px;
    color:#039846;
    margin: 20px auto;
  }


img {

  width: 100vw;
  height: 100vh;
  margin: 0 auto;
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
