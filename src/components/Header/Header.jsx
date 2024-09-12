import logo from "../../assets/images/logo-bookmark.svg";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <header className="flex max-w-screen-lg items-center justify-between py-10">
      <a
        href="#main"
        className="absolute left-0 z-[100] m-3 -translate-x-[150%] bg-soft-blue p-3 text-white transition focus:translate-x-0"
      >
        Skip to main content
      </a>
      <a href="#" className="z-50">
        <img
          src={logo}
          alt="Bookmark"
          width={150}
          height={25}
          className={`transition duration-300 ease-in-out md:filter-none ${
            isMenuOpen ? "filter-logo-white" : ""
          }`}
        />
      </a>

      <NavbarMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
