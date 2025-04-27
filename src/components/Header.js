import {React, useEffect, useState} from 'react';
import '../styles/Header.css'; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DropDownMenu from './DropDownMenu.js';

function Header({isLoggedIn}) {
  const [accountURL, setAccountUrl] = useState('/signIn') //By default take to the login page 
  useEffect(() => {
    if(isLoggedIn){
      setAccountUrl('/adminPanel')
    }
    else{
      setAccountUrl('/signIn')
    }
  })
  return (
      <header className="header">
        <section className="left-menu-section">
          <nav>
            <ul>
              <li>Shop <FontAwesomeIcon icon={faChevronDown} className="menu-down-arrow-icon"/>
                <DropDownMenu />
              </li>
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
              <li><Link to="">Search</Link></li>
              <li><Link to="/">Cart</Link></li>
              <li><Link to={accountURL}>Account</Link></li>
            </ul>
          </nav>
        </section>
      </header>
  );
}

export default Header;