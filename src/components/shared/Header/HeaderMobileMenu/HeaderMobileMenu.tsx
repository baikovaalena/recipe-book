import './HeaderMobileMenu.css';
import { NavLink } from 'react-router';

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
          <NavLink to="/season-recipe" className="burger__mobile-menu-link">
            СЕЗОННЫЕ БЛЮДА
          </NavLink>
          <NavLink to="/favorits" className="burger__mobile-menu-link">
            ИЗБРАННОЕ
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default HeaderMobileMenu;
