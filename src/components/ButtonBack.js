import styled from 'styled-components';

const ButtonBack = styled.button`


  top: 20px;
  margin: 10px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;

  background: none;
  outline: none;
  border: none;

  -moz-outline: none;
  -moz-background: none;
  -moz-border: none;

  &&:hover {
    filter: opacity(5%);
    animation-name: 'doughnuts';
    animation-duration: 2s;
  }




`;

export default ButtonBack;
