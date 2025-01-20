import logo from '../../../img/logo.png';
import './HeaderDesktopMenu/HeaderDesktopMenu.css';

import HeaderMobileMenu from './HeaderMobileMenu/HeaderMobileMenu';
import HeaderDesktopMenu from './HeaderDesktopMenu/HeaderDesktopMenu';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header-container">
      <img src={logo} alt="logo" className="logo" />
      <HeaderMobileMenu onChange={handleMenuOpen} isMenuOpen={isMenuOpen} />
      <HeaderDesktopMenu />
    </header>
  );
};

export default Header;
