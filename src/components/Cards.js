import styled from 'styled-components';

const Card = styled.div`

  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-gap: 20px;
  grid-row-gap: 25px;
  grid-column-gap: 50px;
  flex: 1 0 auto;
  background: #21222c;
  border-radius: 16px 16px 16px 16px;
  max-width: 300px;
  margin: 90px auto;

  div:hover {
    filter: opacity(5%);
    animation-name: 'doughnuts';
    animation-duration: 2s;
  }

  h1 {
    font-family: roboto;
    font-size: 20px;
    color:#039846;
    text-align: center;
  }

  h1:hover {
    color: orange;
    animation-name: 'doughnuts';
   animation-duration: 2s;
  }

`;

export default Card;
