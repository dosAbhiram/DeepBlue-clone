import { useState } from "react";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#">
            <img src="/logo.webp" alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li className="dropdown">
            <button
              onClick={toggleDropdown}
              className={`dropbtn ${dropdownOpen ? "dropdown-open" : ""}`}
            >
              <img
                src="/dropdown.png"
                alt="Dropdown Button"
                className="dropdown-icon"
              />
              <img src="/close.png" alt="Close Button" className="close-icon" />
            </button>
            <div
              className={`dropdown-content ${
                dropdownOpen ? "dropdown-content-open" : ""
              }`}
            >
              <button onClick={closeDropdown} className="closebtn">
                <img src="/close.png" alt="Close Button" />
              </button>
              <a href="#">
                <em>ABOUT</em>
              </a>
              <a href="#">
                <em>SERVICES</em>
              </a>
              <a href="#">
                <em>WORK</em>
              </a>
              <a href="#">
                <em>CASE STUDIES</em>
              </a>
              <a href="#">
                <em>TESTIMONIALS</em>
              </a>
              <a href="#">
                <em>BLOG</em>
              </a>
              <a href="#">
                <em>CONTACT</em>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
