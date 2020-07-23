import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {  Aside, Input, ButtonsControl } from './styles';
import api from '../../service/api';
import { MdBlurCircular } from 'react-icons/md';

export default function Launcher() {

  /*
  function handleClickHiddenLauncherApp() {

    handleHiddenLauncherApp();
  }
*/

  function handleHiddenLauncherApp() {

    const launcherApp = document.querySelector('.launcher-apps');
    const buttonUp = document.querySelector('.up-button');
    const buttonDown = document.querySelector('.down-button');
    const bodyMenu = document.querySelector('.body-menu');


    launcherApp.style.display = 'none';
    buttonUp.style.display = 'flex';
    buttonDown.style.display = 'none';
    bodyMenu.style.height = '7vh';
    bodyMenu.style.background = 'rgba(1, 1, 1, 1)';
  }


  function handleShowLauncherApp() {

    const launcherApp = document.querySelector('.launcher-apps');
    const buttonUp = document.querySelector('.up-button');
    const buttonDown = document.querySelector('.down-button');
    const bodyMenu = document.querySelector('.body-menu');


    launcherApp.style.display = 'block';
    buttonUp.style.display = 'none';
    buttonDown.style.display = 'flex';
    bodyMenu.style.height = '100vh';
    bodyMenu.style.top = 'auto';
    bodyMenu.style.background = 'rgba(1, 1, 1, 0.8)';
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    async function resMenu() {
      const response = await api.get('menuicons');
      const data = response.data.map( icons => ({
        ...icons,
      }) )
      const results =
        data.filter(icons => (
          icons.name.includes(searchTerm)
          ||
          icons.name.toLowerCase().includes(searchTerm)
          ||
          icons.name.toUpperCase().includes(searchTerm)

        )
      );
      setSearchResults(data);
      setSearchResults(results);
    }
    resMenu();
  }, [searchTerm]);

  return(
    <>
      <Aside  className = "body-menu">
        <section className="launcher-apps">
          <Input
            className="input"
            type="text"
            placeholder="Procure um app"
            value={searchTerm}
            onChange={handleInputChange}
            />
            <ul>
              {
                searchResults.map(icon => (
                    <li key={icon.id}>
                      <Link to={icon.link}>
                        <img className="icone-img" style={{ height: 48, width: 60 }}
                        src={icon.iconImg} title={icon.name}
                        alt={icon.name}
                        />
                        <span><h5>{icon.name}</h5></span>
                      </Link>
                    </li>
                ))
              }
            </ul>
        </section>
      </Aside>
      <ButtonsControl>
        <MdBlurCircular
          className="up-button"
          size={38}
          color="#fff"
          onClick={() => handleShowLauncherApp()}
          />
           <MdBlurCircular
          className="down-button"
          size={38}
          color="#fff"
          display="none"
          onClick={() => handleHiddenLauncherApp()}
          />
      </ButtonsControl>
    </>
  );
}

