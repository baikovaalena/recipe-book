import logo from '../../../img/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" className="logo" />
      <ul className="header-container__header-list">
        <li>
          <button className="header-button">Главная страница</button>
        </li>
        <li>
          <button className="header-button">Сезонные блюда</button>
        </li>
        <li>
          <button className="header-button">Избранные рецепты</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
