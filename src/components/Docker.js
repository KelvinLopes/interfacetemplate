import styled from 'styled-components';


const Docker = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;
  flex-wrap: wrap;



  h1 {
    font-family: roboto;
    font-size: 48px;
    color:#039846;
    margin: 20px auto;
  }


ul {

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex: 1 0 auto;

    margin: 20px;
    border-bottom: solid 5px #009aaa;
    overflow: touch;
    -webkit-overflow-scrolling-x: auto;
    list-style: none;
}

  h1 {
    font-family: roboto;
    font-size: 48px;
    color:#039846;
    margin: 20px auto;
  }

li{

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
}

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

export default Docker;
