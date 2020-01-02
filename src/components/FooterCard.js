import styled from 'styled-components';

const FooterCard = styled.div`

  /*display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  grid-row-gap: 10px;
  grid-column: 50px;*/
  flex: 1 0 auto;
  background: #21222c;
  max-width: 800px;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  max-width: 300px;
  position: relative;
  padding: 2px 0 10px 0;
  border-radius: 10px 10px 10px 10px;


  h5 {
    font-family: roboto;
    font-size: 20px;
    color:#009aaa;
    cursor: pointer;
  }

  h5:hover {
   filter: opacity(5%);
   color: #fff;
  }


a:link {
  text-decoration: none;
  color:#009aaa;
}

a:hover {
  text-decoration: none;
  color: orange;
}

`;

export default FooterCard;
