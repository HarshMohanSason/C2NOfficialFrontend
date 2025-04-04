import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import { CustomAlert} from '../utilities/CustomAlert.js'

const ContinueWithGoogleButton = () => {
  const navigate = useNavigate(); //To automatically navigate to the homepaeg if the user is logged in 
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        //Get the user profile first 
        const profile = await res.json();
        // ✅ Send profile to your backend
        const backendRes = await fetch(
          "http://localhost:8080/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: profile.name,
              email: profile.email,
              authType: "google",
              password: null
            }),
          }
        );
        navigate('/') //Navigate to the home page automatically when user signs in 
      } catch (error) {
          CustomAlert({
          title: "Error!",
          text: `Unexpected error (${error}). Please try again.`,
          });
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });
  return (
    <button
      onClick={() => login()}
      type="button"
      className="google-sign-in-button"
    >
      Continue with Google
    </button>
  );
};

export default ContinueWithGoogleButton;
