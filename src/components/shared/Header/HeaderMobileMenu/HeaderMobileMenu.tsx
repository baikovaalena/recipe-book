import './HeaderMobileMenu.css';
import { NavLink } from 'react-router';

interface IProps {
  onChange: () => void;
  menuOpen: boolean;
}

const HeaderMobileMenu = ({ menuOpen, onChange }: IProps) => {
  return (
    <div className="header-container__mobile-menu">
      <button className="burger" onClick={onChange}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      {menuOpen && (
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
