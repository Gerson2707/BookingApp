import { Link } from "react-router-dom";
import "./styles/PrincipalHeader.css";
import { useState } from "react";

const PrincipalHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="principal__header">
      <h1>
        <Link to="/">Hotels App</Link>
      </h1>
      <nav>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
 {/*        {showMenu && (
          <div className="overlay" onClick={toggleMenu}></div>
        )}className={`nav__bar ${showMenu ? "show" : ""}`} */}
        <ul >
          <li className="li__nav" onClick={toggleMenu}>
            <Link to="/register">Register</Link>
          </li>
          <li className="li__nav" onClick={toggleMenu}>
            <Link to="/login">Login</Link>
          </li>
          <li className="li__nav" onClick={toggleMenu}>
            <Link to="/reservations">Reservations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PrincipalHeader;
