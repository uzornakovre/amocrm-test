/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

function Contacts({ place }) {
  return (
    <div className={`contacts contacts_place_${place}`}>
      <a className="contacts__phone" href="tel:+75555555555">+7 555 555-55-55</a>
      <ul className="contacts__social">
        <li className="contacts__social-item">
          <a className="contacts__social-link" href="#" target="_blank"></a>
        </li>
        <li className="contacts__social-item">
          <a className="contacts__social-link" href="#" target="_blank"></a>
        </li>
        <li className="contacts__social-item">
          <a className="contacts__social-link" href="#" target="_blank"></a>
        </li>
      </ul>
      { place === "footer" && <p className="contacts__address">Москва, Путевой проезд 3с1, к 902</p> }
    </div>
  )
}

export default Contacts;