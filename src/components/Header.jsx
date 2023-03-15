import React from 'react';
import headerLogo from '../images/logo_welbex.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <img className="header__logo" src={headerLogo} alt="Логотип Велбекс" />
      </div>
    </header>
  )
}

export default Header;