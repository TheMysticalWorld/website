import logo from "./assets/Logo.png";

import "./Navbar.css";

const Navbar = () => {
  let isNavOpen = false;
  return (
    <div className="navbar">
      <div className="navbar-logo-div hidden-element">
        <a href="">
          <img src={logo} className="navbar-logo" />
        </a>
        <div className="navbar-name-div">
          <a href="" className="navbar-logo-anchor-tag">
            The Mystical World
          </a>
          <div className="navbar-extras">
            <a href="" className="navbar-logo-anchor-tag">
              Tarot | Numerology | Graphology | Counselling
            </a>
          </div>
        </div>
      </div>
      <ul className="navbar-ul hidden-element">
        <li>
          <a href="#about" className="navbar-anchor-tags">
            About Me
          </a>
        </li>
        <li>
          <a href="#tarot" className="navbar-anchor-tags">
            Tarot Reading
          </a>
        </li>
        <li>
          <a href="#numerology" className="navbar-anchor-tags">
            Numerology
          </a>
        </li>
        <li>
          <a href="#graphology" className="navbar-anchor-tags">
            Graphology
          </a>
        </li>
        <li>
          <a href="#counselling" className="navbar-anchor-tags">
            Counselling
          </a>
        </li>
        <li>
          <a href="#courses" className="navbar-anchor-tags">
            Courses
          </a>
        </li>
      </ul>
      <label className="navbar-bar hidden-element" htmlFor="check">
        <input
          type="checkbox"
          id="check"
          onClick={() => {
            if (!isNavOpen) {
              document.querySelector(".navbar-ul").style.display = "inherit";
              isNavOpen = true;
            } else {
              document.querySelector(".navbar-ul").style.display = "none";
              isNavOpen = false;
            }
          }}
        />

        <span className="navbar-hamburger-top"></span>
        <span className="navbar-hamburger-middle"></span>
        <span className="navbar-hamburger-bottom"></span>
      </label>
    </div>
  );
};

export default Navbar;
