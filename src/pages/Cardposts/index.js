import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import Card from './../../components/Cards';
import FooterCard from './../../components/FooterCard';
import ButtonBackCards from '../../components/ButtonBackCards';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Content, Header, Description } from './style';
import { Link } from 'react-router-dom';
import LauncherApp from '../../components/LauncherApps';
import api from '../../service/api';

import FrondEndImg from './../../assets/frontend.png';
import BackEndImg from './../../assets/backend.png';
import DesignerImg from './../../assets/designer.png';
import UXmg from './../../assets/ux.webp';


export default function CardPosts() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function renderCards() {
      const response = await api.get('cardsdevs');
      const data = response.data.map(card => ({
        ...card,
      }))
      setCards(data);
    }
    renderCards();
  }, []);

    return(

      <Container>
         <ButtonBackCards>
          <Link to="/">
          <FaArrowCircleLeft  size={48} color="#ffff"/>
          </Link>
       </ButtonBackCards>
       {cards.map(card => (
         <Card key={card.id}>
         <Header>
           <h1>{card.title}</h1>
            </Header>
        <Content>
          <img className="img" src={card.image} alt={card.title}></img>
          <Description>
           <p>{card.resume}</p>
          </Description>
        </Content>
            <FooterCard>
            <Link to={card.link}><h5>Ver mais desse dev</h5></Link>
            </FooterCard>
        </Card>
         ))}
        <LauncherApp />
      </Container>
    );
}
