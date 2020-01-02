import styled from 'styled-components';

export const Content = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 auto;
  background: #21222c;
  max-width: 300px;
  padding: 10px auto;

  .img  {
  width: 100%;
  height: 40vh;
  position: relative;
}
`
;


  export const Header = styled.div`

  background: #21222c;
  max-width: 300px;
  border-radius: 10px 10px 10px 10px;

  h1 {
    font-family: roboto;
    font-size: 28px;
    color:#039846;
    padding: 12px;
    text-align: center;
    vertical-align: middle;
  }
`;

export const Description = styled.div`

max-width: 300px;

p {
  font-family: roboto;
  font-size: 18px;
  color:#ffff;
  width: 100%;
  height: 100px;
  padding: 0.8rem;

  text-align: center;
}
`;
