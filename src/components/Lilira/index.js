import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import { Player } from 'react-player';
import {
  Content,
  Header,
  Card,
  CardImg,
  Input,
  Form,
  Description,
  LinkCard
}
from './styles';

import api from '../../service/api';
import LanchApps from '../../components/LauncherApps';

export default function Lilira() {

  const [liliraName, setLiliraName] = useState([]);
  const [liliraAvatar, setLiliraAvatar] = useState([]);
  const [liliraVersion, setLiliraVersion] = useState([]);

  const [talkLilira, setTalkLilira] = useState([]);
  const [replyLilira, setReplyLilira] = useState([]);
  const [cardsDevLilira, setCardsDevLilira] = useState([]);
  const [ cardsHelpLilira, setCardsHelpLilira] = useState([]);

  const history = useHistory();

  function handleInputChange(event) {

    setTalkLilira(event.target.value);
  }

  function clearLiliraActions() {

     const liliraAvatar = document.querySelector('.lilira-avatar');
     liliraAvatar.style.display = 'block';

    setLiliraVersion([]);
    setLiliraName([]);
    setTalkLilira([]);
    setCardsDevLilira([]);
    setCardsHelpLilira([]);
  }

  useEffect( () => {

    const message = 'Me desculpe, mas não foi possível conectar.'
    async function resLilira() {

      const responseAvatar = await api.get('liliraname');
      const dataAvatar = responseAvatar.data.map(lilira => ({
        ...lilira,
      }))

      setLiliraAvatar(dataAvatar);

      if(talkLilira === 'Qual é seu nome?') {

       setLiliraName(dataAvatar);
    }

      if(talkLilira === 'Qual sua versão?' || talkLilira === '--Lilira --version') {

        const response = await api.get('liliraVersion');
      const data = response.data.map(lilira => ({
        ...lilira,
      }))


        setLiliraVersion(data);

        const respLiliraVersion = document.querySelector('.resp-lilira-version');
        const liliraAvatar = document.querySelector('.lilira-avatar');
        const imgVersionLilira = document.querySelector('.version-img-lilira');

        liliraAvatar.style.display = 'none';
        respLiliraVersion.style.display = 'block';
        imgVersionLilira.style.display = 'block';


        setTimeout(() => {
          setReplyLilira('');
          setTalkLilira('');
          imgVersionLilira.innerHTML = 'none';
          respLiliraVersion.innerHTML = '';
        },8000)
      }


    if(talkLilira === 'Bom dia' || talkLilira === 'Boa tarde' || talkLilira === 'Boa noite') {

       const respLilira = document.querySelector('.resp-lilira');
       respLilira.style.display = 'block';

     setReplyLilira('Em breve saberei responder');
    }

     if(talkLilira === 'Receber ajuda' || talkLilira === '--help' ) {

      const response = await api.get('lilirahelpcomands');
      const cardHelpLilira = document.querySelector('.help-lilira');
      const data = response.data.map(lilira => ({
        ...lilira,
      }))

      cardHelpLilira.style.display = 'block';

       setCardsHelpLilira(data);
    }

     if(talkLilira === '--push Lilira front_end') {

      const response = await api.get('cardsdevs');

     if(response) {
       setTimeout( () => {
         history.push(window.open('/devs/post/frontend'));
         setTalkLilira('');
         setReplyLilira('');
       }, 3000);
     }

      if(!response) {
        return setReplyLilira(message);
      }

      return setReplyLilira('É para já!')

    }

     if(talkLilira === '--list Lilira devs' ) {

      const respLilira = document.querySelector('.resp-lilira');
      const input = document.querySelector('.input');
      const cardLilira = document.querySelector('.card-lilira');

      input.style.display = 'none';
      respLilira.style.display = 'block';
      cardLilira.style.display = 'block';

      const response = await api.get('cardsdevs');
      const data = response.data.map(lilira => ({
        ...lilira,
      }))

       setCardsDevLilira(data);

       setTimeout(() => {
         input.style.display = 'block';
         setTalkLilira('');
       }, 6000);


       return setReplyLilira('Aqui está o cards de Devs')
    }


      if(!responseAvatar) {
        return setReplyLilira(message);
      }

    }
    resLilira();
    setReplyLilira('');
  }, [talkLilira]);

  return(
    <Container>
      <content>
        <Card className="card">
          <div>
            <Header>
              <h5 className="resp-lilira">{`${replyLilira}`}</h5>


            { liliraName.map(lilira => (
              <h5 className="resp-lilira">{lilira.name}</h5>
            )) }


              {/**lilira images map */}

              { liliraVersion.map(lilira => (
                <>
                  <h5 className="resp-lilira-version" key={lilira.id}>Estou na {lilira.version} {lilira.message}</h5>
                  <img className="version-img-lilira" src={lilira.img} alt="Lilira" />
                </>
              )) }

            </Header>
            <CardImg>
              { liliraAvatar.map( lilira => (
                <img key={lilira.id} className="lilira-avatar lilira-img" src={lilira.avatar} alt="Lilira" />
              ))}
            </CardImg>
            <Form>
              <Input
                className="input"
                type="text"
                label="speaker"
                placeholder="Escreva algo aqui, para eu te ajudar"
                value={talkLilira}
                onChange={handleInputChange}
                onClick={clearLiliraActions}
              />
            </Form>
            <Card className="card-lilira">
                {cardsDevLilira.map(lilira => (
                  <li key={lilira.id}>
                    <Header>
                      <h1>{lilira.title}</h1>
                    </Header>
                    <CardImg>
                      <img src={lilira.image} alt={lilira.title} />
                    </CardImg>
                    <Description>
                      <p>
                        {lilira.resume}
                      </p>
                    </Description>
                      <LinkCard>
                        <Link to={lilira.link} target="_blank">Ver mais desse(a) dev</Link>
                      </LinkCard>
                  </li>
                ))}
            </Card>


            <Card className="help-lilira">
                {cardsHelpLilira.map(lilira => (
                  <li key={lilira.id}>
                    <Header>
                      <h1>{lilira.title}</h1>
                    </Header>
                    <CardImg>
                      <img src={lilira.image} alt={lilira.title} />
                    </CardImg>
                    <Description>
                      <p>
                        {lilira.phrase1}
                      </p>

                       <p>
                        {lilira.phrase2}
                      </p>

                       <p>
                        {lilira.phrase3}
                      </p>

                       <p>
                        {lilira.phrase4}
                      </p>

                       <p>
                        {lilira.phrase5}
                      </p>

                       <p>
                        {lilira.phrase6}
                      </p>

                    <Header>
                      <h1>{lilira.comandsTitle}</h1>
                    </Header>

                    <CardImg>
                      <img src={lilira.imagelinecomand} alt={lilira.title} />
                    </CardImg>

                       <p>
                        {lilira.listcarddevs}
                      </p>

                      <p>
                        {lilira.pushfronted}
                      </p>

                      <p>
                        {lilira.versioncomand}
                      </p>

                      <p>
                        {lilira.help}
                      </p>

                       <p>
                        {lilira.message}
                      </p>
                    </Description>
                  </li>
                ))}
            </Card>
            <div className="space"></div>
           </div>
        </Card>

      </content>
      <LanchApps />
    </Container>
  );
}
