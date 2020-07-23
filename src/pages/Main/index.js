import React from 'react';
import { Content } from './style';
import Container from '../../components/Container';
import LauncherApps from '../../components/LauncherApps';


import DevImg from './../../assets/dev.webp';
export default function Main() {
    return(
      <>
      <Container>
      <div>
          <Content>
            <h1>Devs</h1>
            <img src={DevImg} alt="Dev"/>
          </Content>
        <LauncherApps />
        </div>
      </Container>
      </>
    );
}
