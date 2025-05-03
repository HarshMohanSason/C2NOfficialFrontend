import { React, useState } from "react";
import SignUpPageImage from "../../assets/images/sign_up_page_image.png";
import "../../styles/auth/SignUp.css";
import { Link } from "react-router-dom";
import ContinueWithGoogleButton from "./ContinueWithGoogleButton";
import {CustomAlert} from "../utilities/CustomAlert";
import {useNavigate} from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
    auth_type: "email",
  });
  const navigate = useNavigate();
  const handleFormData = (event) => {
    const { id, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  async function submitSignUpWithEmailForm(event) {
    event.preventDefault();

    try {
      //Make sure none of the fields are empty. 
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.agree
      ) {
        CustomAlert({
          title: "Oops!",
          text: "One or more fields is empty",
        });
        return;
      }
      //Sending the data to the backend server 
      const response = await fetch(process.env.REACT_APP_EMAIL_SIGN_UP_URL, {
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
          navigate('/');
          return;
        }
        case 400:
        case 409:
        case 500: {
          const error = await response.text();
          CustomAlert({
          title: "Oops!",
          text: error,
          });
          return;
        }
        default: {
          CustomAlert({
          title: "Error!",
          text: `Unexpected error (${response.status}). Please try again.`,
          });
          return;
        }
      }
    } catch (e) {
      CustomAlert({
        title: "Error!",
        text:`An error occurred: ${e}`,
      });
    }
  }

  return (
    <div className="sign-up-page">
      <section className="sign-up-section">
        <h2>GET STARTED NOW</h2>
        <form onSubmit={submitSignUpWithEmailForm}>
          <section className="sign-up-with-email-section">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleFormData}
              placeholder="Enter your full name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleFormData}
              placeholder="Enter your email"
              title="Enter a valid email address"
              required
            />
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleFormData}
              placeholder="Create a strong password"
              required
            />

            <div className="terms-and-conditions">
              <input
                type="checkbox"
                id="agree"
                checked={formData.agree}
                onChange={handleFormData}
                required
              />
              <label htmlFor="agree">I agree to the terms and conditions</label>
            </div>

            <button id="sign-up-button" type="submit">
              Signup
            </button>
          </section>
        </form>

        <div className="or-divider">Or</div>
        <ContinueWithGoogleButton isSignUp={true} />
        <h4>
          Have an account?{" "}
          <Link to="/signIn" style={{ textDecoration: "none", color: "#FF3D22" }}>
            Sign in
          </Link>
        </h4>
      </section>

      <section className="img-section">
        <figure>
          <img src={SignUpPageImage} alt="sign up"></img>
        </figure>
      </section>
    </div>
  );
}

export default SignUp;
