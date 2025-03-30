import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSnapchat, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer className="footer">
			<section className="logo-section">
				<h1>C2N</h1>
			</section>
			<section className="quick-links">
				<nav>
					<ul>
						<li><a href="">FAQ</a></li>
						<li><a href="">Return Policy</a></li>
						<li><a href="">Wholesale Requests</a></li>
						<li><a href="">Contact Us</a></li>
					</ul>
				</nav>
			</section>
			<section className="social-media">
				<nav>
					<ul>
          				<li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '24px' }} /></a></li>
          				<li><a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSnapchat} style={{ color: 'white', fontSize: '24px' }} /></a></li>
          				<li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{ color: 'white', fontSize: '24px' }} /></a></li>
          				<li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} style={{ color: 'white', fontSize: '24px' }} /></a></li>
					</ul>
				</nav>
			</section>
		</footer>
		);
}

export default Footer;