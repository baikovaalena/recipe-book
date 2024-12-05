import logo from '../../../img/logo.png';
import './HeaderDecstopMenu/HeaderDesctopMenu.css';

import HeaderMobileMenu from './HeaderMobileMenu/HeaderMobileMenu';
import HeaderDecstopMenu from './HeaderDecstopMenu/HeaderDecstopMenu';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header className="header-container">
      <img src={logo} alt="logo" className="logo" />
      <HeaderMobileMenu onChange={handleMenuOpen} menuOpen={menuOpen} />
      <HeaderDecstopMenu />
    </header>
  );
};

export default Header;
