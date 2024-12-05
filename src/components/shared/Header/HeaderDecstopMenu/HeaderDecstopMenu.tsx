import React from 'react';
import './HeaderDesctopMenu.css';

const HeaderDecstopMenu = () => {
  return (
    <ul className="header-container__header-list">
      <li>
        <a href="#" className="header-container-button">
          ГЛАВНАЯ
        </a>
      </li>
      <li>
        <a href="#" className="header-container-button">
          СЕЗОННЫЕ БЛЮДА
        </a>
      </li>
      <li>
        <a href="#" className="header-container-button">
          ИЗБРАННОЕ
        </a>
      </li>
    </ul>
  );
};

export default HeaderDecstopMenu;
