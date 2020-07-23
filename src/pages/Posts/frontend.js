import React, { Component } from 'react';
import { Content, Header, Description } from './style';
import Container from '../../components/Container';
import ButtonBackPost from '../../components/ButtonBackPost';
import StatusBar from '../../components/StatusBar';
import { FaArrowCircleLeft } from 'react-icons/fa';

import { Link } from 'react-router-dom';


import FrondEndImg from './../../assets/frontend.png';

export default class Main extends Component {
  render() {
    return(
      <Container>
          <StatusBar>
        <ButtonBackPost>
          <Link to="/devs/cardposts">
          <FaArrowCircleLeft  size={48} color="#ffff"/>
          </Link>
        </ButtonBackPost>
        <h1>Front End</h1>
        </StatusBar>
      <Content>
        <Header>

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
