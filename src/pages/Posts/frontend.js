import React, { Component } from 'react';
import { Content, Header, Description } from './style';
import Container from './../../components/Container';
import ButtonBack from '../../components/ButtonBack';
import { FaArrowCircleLeft } from 'react-icons/fa';

import { Link } from 'react-router-dom';


import FrondEndImg from './../../assets/frontend.png';

export default class Main extends Component {
  render() {
    return(
      <Container>
        <ButtonBack>
          <Link to="/devs/cardposts">
          <FaArrowCircleLeft  size={48} color="#ffff"/>
          </Link>
        </ButtonBack>
      <Content>
        <Header>
          <h1>Front End</h1>
          <img src={FrondEndImg} alt="Dev"/>
        </Header>

        <Description>
          <p>
            Cria a interface vista pelas pessoas, proporcionando
            também o interagir com ela.
          </p>
          <p>
            Muitas das vezes usa se linguagens como HTML, para estruturação,
            CSS para estilização e o javascript para manipulação da dom enriquecendo
            a aplicação com recursos e possibilitando interações incrivéis.
          </p>
        </Description>

      </Content>
      </Container>
    );
  }
}
