import './HeaderMobileMenu.css';
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
        <ul className="burger__mobile-menu">
          <li>
            <a href="#" className="burger__mobile-menu-link">
              ГЛАВНАЯ
            </a>
          </li>
          <li>
            <a href="#" className="burger__mobile-menu-link">
              СЕЗОННЫЕ БЛЮДА
            </a>
          </li>
          <li>
            <a href="#" className="burger__mobile-menu-link">
              ИЗБРАННОЕ
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HeaderMobileMenu;
