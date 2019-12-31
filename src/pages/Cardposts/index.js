import React, { Component } from 'react';
import Container from './../../components/Container';
import Card from './../../components/Cards';
import FooterCard from './../../components/FooterCard';
import ButtonBack from '../../components/ButtonBack';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Content, Header, Description } from './style';
import { Link } from 'react-router-dom';

import FrondEndImg from './../../assets/frontend.png';
import BackEndImg from './../../assets/backend.png';
import DesignerImg from './../../assets/designer.png';
import UXmg from './../../assets/ux.webp';


export default class CardPosts extends Component {
  render() {
    return(

      <Container>
         <ButtonBack>
          <Link to="/">
          <FaArrowCircleLeft  size={48} color="#ffff"/>
          </Link>
       </ButtonBack>
         <Card>
         <Header>
            <h1>Front End</h1>
            </Header>
        <Content>
          <img className="img" src={FrondEndImg} alt="Front End"></img>
          <Description>
          <p>
          Cria a interface vista pelas pessoas, proporcionando
          também o interagir com ela.
          </p>
          </Description>
        </Content>
            <FooterCard>
            <Link to="/devs/post/frontend"><h5>Ver mais desse dev</h5></Link>
            </FooterCard>
        </Card>


        <Card>
         <Header>
            <h1>Back End</h1>
            </Header>
        <Content>
          <img className="img" src={BackEndImg} alt="Front End"></img>
          <Description>
          <p>
            Cuida da parte que as pessoas não podem ver,
            ou seja são os scripts abaixo da interface front end,
            as regras de negócio da aplicação.
          </p>
          </Description>
        </Content>
            <FooterCard>
            <h5>Ver mais desse dev</h5>
            </FooterCard>
        </Card>


        <Card>
         <Header>
            <h1>UI Design</h1>
            </Header>
        <Content>
          <img className="img" src={DesignerImg} alt="Front End"></img>
          <Description>
          <p>
           Responsável por criar a interface, além de se preocupar
           também de como ela será integrada entre o usuário.
          </p>
          </Description>
        </Content>
            <FooterCard>
            <h5>Ver mais desse dev</h5>
            </FooterCard>
        </Card>


        <Card>
         <Header>
            <h1>UX Design</h1>
            </Header>
        <Content>
          <img className="img" src={UXmg} alt="Front End"></img>
          <Description>
          <p>
          Responsável pela identidade visual, e organização de
          informações de um produto e serviços a serem
          desenvolvidos.
          </p>
          </Description>
        </Content>
            <FooterCard>
            <h5>Ver mais desse dev</h5>
            </FooterCard>
        </Card>
      </Container>
    );
  }
}
