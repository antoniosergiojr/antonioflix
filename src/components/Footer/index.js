import React from 'react';
import { FooterBase } from './styles';
import Logo from "../../assets/img/Logo.png";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="AntonioFlix Logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" rel="noopener noreferrer" target="_blank">
          Imersão React da Alura
        </a>
        {' '}
        por
        {' '}
        <a href="https://github.com/antoniosergiojr" rel="noopener noreferrer" target="_blank">
          Antônio Sérgio Jr.
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
