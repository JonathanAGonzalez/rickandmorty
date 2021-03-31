import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import logoRick from "../assets/img/logo.png";
import logoJonas from "../assets/img/logopurple.png";
import logoJonasDark from "../assets/img/logowhite.png";

import "../sass/Copy.scss";
import "../sass/Header.scss";

const Header = () => {
  const themeContext = useContext(ThemeContext);

  const { theme, setTheme } = themeContext;

  const handleClick = () => {
    setTheme(!theme);
  };

  return (
    <header>
      <div className="header__logo">
        <img
          className="logo__jonas"
          src={theme ? logoJonas : logoJonasDark}
          alt="logo"
        />
        <img className="header__logo--img" src={logoRick} alt="logo" />
      </div>

      <div className={theme ? "header__mode" : "header__dark"}>
        <button
          className={theme ? "header__mode--light" : "header__mode--dark"}
          type="button"
          onClick={handleClick}
        >
          {theme ? (
            <RiSunLine className="header__mode--sun" />
          ) : (
            <RiMoonClearLine className="header__mode--moon" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
