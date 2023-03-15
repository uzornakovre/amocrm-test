/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
// import headerLogo from '../images/logo_welbex.svg';
import { welbexLogo } from '../images/svg';
import Contacts from './Contacts';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-wrapper">
          {welbexLogo}
          <p className="header__subtitle">крупный интегратор CRM в&nbsp;Росcии и ещё 8 странах</p>
        </div>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-list-item">
              <a className="header__menu-link" href="#">Услуги</a>
            </li>
            <li className="header__menu-list-item">
              <a className="header__menu-link" href="#">Виджеты</a>
            </li>
            <li className="header__menu-list-item">
              <a className="header__menu-link" href="#">Интеграции</a>
            </li>
            <li className="header__menu-list-item">
              <a className="header__menu-link" href="#">Кейсы</a>
            </li>
            <li className="header__menu-list-item">
              <a className="header__menu-link" href="#">Сертификаты</a>
            </li>
          </ul>
        </nav>
      </div>
      <Contacts place="header" />
    </header>
  )
}

export default Header;