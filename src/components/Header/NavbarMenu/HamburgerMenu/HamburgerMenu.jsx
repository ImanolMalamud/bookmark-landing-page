const HamburgerMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="pointer z-50 flex h-[18px] w-7 flex-col justify-between md:hidden" // 1.15rem ≈ 18px
      aria-haspopup="true"
      aria-expanded={isMenuOpen}
      aria-controls="navbar-menu"
    >
      <span className="sr-only">Open menu</span>
      <span
        className={`z-50 h-[2px] w-7 transform transition duration-300 ease-in-out ${
          // 0.5rem ≈ 8px
          isMenuOpen ? "translate-y-2 rotate-45 bg-white" : "bg-slate-900"
        }`}
        aria-hidden="true"
      ></span>
      <span
        className={`z-50 h-[2px] w-7 bg-slate-900 transition duration-300 ease-in-out ${
          // 0.5rem ≈ 8px
          isMenuOpen ? "opacity-0" : ""
        }`}
        aria-hidden="true"
      ></span>
      <span
        className={`z-50 h-[2px] w-7 transform transition duration-300 ease-in-out ${
          // 0.5rem ≈ 8px
          isMenuOpen ? "-translate-y-2 -rotate-45 bg-white" : "bg-slate-900"
        }`}
        aria-hidden="true"
      ></span>
    </button>
  );
};

export default HamburgerMenu;
