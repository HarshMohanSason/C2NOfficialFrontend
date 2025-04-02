import React from 'react';
import loginPageImage from '../assets/images/login_page_image.png'
import '../styles/Login.css'; 

function Login() {
  return (
    <div className ="login-page">
      <section className="login-section">
        <h2>Get Started Now </h2>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <label>
          <input type="checkbox" /> I agree to the terms and conditions
        </label>
        <button id="sign-up-button">Sign Up</button>
      </section>

      <section className="img-section">
      <figure>
          <img src={loginPageImage}></img>
      </figure>
      </section>
    </div>
  );
}

export default Login;