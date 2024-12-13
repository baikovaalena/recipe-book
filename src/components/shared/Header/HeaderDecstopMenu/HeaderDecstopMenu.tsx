import React from 'react';
import './HeaderDesctopMenu.css';
import { NavLink } from 'react-router';

const HeaderDecstopMenu = () => {
  return (
    <ul className="header-container__header-list">
      <NavLink to="/" className="header-container-button">
        ГЛАВНАЯ
      </NavLink>
      <NavLink to="/season-recipe" className="header-container-button">
        СЕЗОННЫЕ БЛЮДА
      </NavLink>
      <NavLink to="/favorites" className="header-container-button">
        ИЗБРАННОЕ
      </NavLink>
    </ul>
  );
};

export default HeaderDecstopMenu;
