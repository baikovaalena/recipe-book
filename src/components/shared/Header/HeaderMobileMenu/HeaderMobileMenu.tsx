import './HeaderMobileMenu.css';
import { NavLink } from 'react-router';
import React from 'react';

interface IProps {
  onChange: () => void;
  isMenuOpen: boolean;
}

const HeaderMobileMenu = ({ isMenuOpen, onChange }: IProps) => {
  return (
    <div className="header-container__mobile-menu">
      <button className="burger" onClick={onChange}>
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>
      {isMenuOpen && (
        <nav className="burger__mobile-menu">
          <NavLink to="/" className="burger__mobile-menu-link">
            ГЛАВНАЯ
          </NavLink>
          <NavLink to="/wine" className="burger__mobile-menu-link">
            ВЫБОР ВИН
          </NavLink>
          <NavLink to="/favorites" className="burger__mobile-menu-link">
            ИЗБРАННОЕ
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default HeaderMobileMenu;
