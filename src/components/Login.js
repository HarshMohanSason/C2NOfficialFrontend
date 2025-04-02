import React from 'react';
import loginPageImage from '../assets/images/login_page_image.png'
import '../styles/Login.css'; 
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className ="login-page">
      <section className="login-section">
        <h2>GET STARTED NOW </h2>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Enter your email" />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <div className="terms-and-conditions">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree to the terms and conditions</label>
        </div>
        <button id="sign-up-button">Signup</button>

        <div class="or-divider">Or</div>

        <button type="button" class="google-sign-in-button" >
          Sign in with Google
        </button>

        <h4>Have an account? <Link to="" style={{ textDecoration: "none", color: "#FF3D22" }}> Sign in </Link></h4>
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