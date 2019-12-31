import React, { Component } from 'react';
import { Content } from './style';
import Container from './../../components/Container';
import Docker from './../../components/Docker';

import { Link } from 'react-router-dom';


import DevImg from './../../assets/dev.webp';
export default class Main extends Component {
  render() {
    return(
      <Container>
      <Content>
        <h1>Devs</h1>
        <img src={DevImg} alt="Dev"/>

        <Docker>
          <ul>
            <Link to="/devs/cardposts">
            <li><h6>Ver</h6></li>
            </Link>
            <li><h6>Info</h6></li>
            <li><h6>Sobre</h6></li>
          </ul>
        </Docker>
      </Content>
      </Container>
    );
  }
}
