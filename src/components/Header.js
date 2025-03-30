import React from 'react';
import '../styles/Header.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
      <header className="header">
        <section className="left-menu-section">
          <nav>
            <ul>
              <li>Shop <FontAwesomeIcon icon={faChevronDown} /></li>
              <li>Wishlist <FontAwesomeIcon icon={faChevronDown} /></li>
              <li>Learn <FontAwesomeIcon icon={faChevronDown} /></li>
            </ul>
          </nav>
        </section>
        
        <section className="brand-section">
          <h2 className="heading-text">C2N</h2>
        </section>
        
        <section className="right-menu-section">
          <nav>
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