import Logo from "@components/Logo";
import React from "react";
import TwSizeIndicator from "@components/TwSizeIndicator";
import DrawerMenu from "./DrawerMenu";

const Header = () => {

  return (
    <header className="header">
      <nav className="navbar container px-1 sm:px-8">
        <div className="order-0">
          <Logo />
          <TwSizeIndicator /> 
        </div>
        <DrawerMenu />
      </nav>
    </header>
  );
};

export default Header;
