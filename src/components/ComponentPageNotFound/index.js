import React from 'react';
import Container from '../Container';
import { Content } from './styles';

import LauncherApps from '../LauncherApps';

export default function PageNotFound() {

  return (
    <Container>
      <img className="error-img" src="" alt="" />
      <Content>
        <p>
          Essa página não existe ou foi removida, acesse o menu
          para retornar a ver os contéudos especiais.
        </p>
      </Content>
      <LauncherApps />
    </Container>
  );
}
