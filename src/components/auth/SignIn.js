import {React, useState} from 'react';
import { Link } from "react-router-dom";
import ContinueWithGoogleButton  from "./ContinueWithGoogleButton.js";
import SignInPageImage from "../../assets/images/sign_in_page_image.jpg";
import '../../styles/auth/SignIn.css'
import {CustomAlert} from "../utilities/CustomAlert.js";
import {useNavigate} from 'react-router-dom';

function SignIn(){
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    auth_type: "email"
  });
  const navigate = useNavigate();
  const handleFormData = (event) => {
    const { name, value } = event.target;
    setFormData((newValue) => ({
      ...newValue,
      [name]: value,
    }));
  };

  async function submitSignUpWithEmailForm(event) {
    event.preventDefault();
    try{
      const response = await fetch(process.env.REACT_APP_EMAIL_SIGN_IN_URL, {
          method: "POST",
          credentials: "include", 
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });
      switch (response.status) {
        case 200: 
        case 201: {
          navigate('/')
          return;
        }
        case 401: 
        case 404: 
        case 409: 
        case 500: {
          const error = await response.text();
          CustomAlert({
          title: "Oops!",
          text: error,
          });
          return;
        }
        default:{
          CustomAlert({
          title: "Error!",
          text: `Unexpected error (${response.status}). Please try again.`,
          });
          return;
        }
      }
    }
    catch(e)
    {
      CustomAlert({
        title: "Error!",
        text: `An error occured ${e}. Please try again later.`,
        });
    }
  }

  return (
    <div className="sign-in-page">
      <section className="sign-in-section">
        <h1>Welcome Back!</h1>
        <h6>Enter your current credentials to login</h6>
        <form onSubmit={submitSignUpWithEmailForm}>
          <section className="sign-in-with-email-section">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormData}
              placeholder="Enter your email"
              title="Enter a valid email address"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormData}
              placeholder="Enter your password"
              required
            />
            <button id="sign-in-button" type="submit">
              Login
            </button>
          </section>
        </form>

        <div className="or-divider">Or</div>
        <ContinueWithGoogleButton/> 
        <h4>Don’t have an account?{" "}
          <Link to="/signUp"style={{ textDecoration: "none", color: "#FF3D22" }}>
            Sign Up
          </Link>
        </h4>
      </section>

      <section className="img-section">
        <figure>
          <img src={SignInPageImage} alt="SignIn"></img>
        </figure>
      </section>
    </div>
  );
}
export default SignIn;