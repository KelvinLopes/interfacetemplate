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
            <img src={DevImg} alt="Dev"/>
          </Content>
        <LauncherApps />
        </div>
      </Container>
      </>
    );
}
