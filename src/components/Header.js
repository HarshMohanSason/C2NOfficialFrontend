import React from 'react';
import '../styles/Header.css'; // Import styles for the header
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <section className="top-row">
        <nav className="left-menu">
          <ul>
            <li>Shop <FontAwesomeIcon icon={faChevronDown} /></li>
            <li>Wishlist <FontAwesomeIcon icon={faChevronDown} /></li>
            <li>Learn <FontAwesomeIcon icon={faChevronDown} /></li>
          </ul>
        </nav>
        <h2 className="heading-text">C2N</h2>
        <nav className="right-menu">
          <ul>
            <li>Search</li>
            <li>Cart</li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;