import React from 'react'; 
import '../styles/CookiesPopup.css';

function CookiesPopup (){
	return (
		<div className="cookies-pop-up">
			<section className ="cookies-text-section">
			<h3>We value your privacy</h3> 
			<p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
			</section>
			<section className="cookies-buttons">
				<button id="customize-button-cookies">Customize</button>
				<button id="reject-button-cookies">Reject All</button>
				<button id="accept-button-cookies">Accept All</button>
			</section>
		</div>
	);
}

export default CookiesPopup; 