import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import { CustomAlert} from '../utilities/CustomAlert.js'

const ContinueWithGoogleButton = ({isSignUp}) => {
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
        let requestUrl = process.env.REACT_APP_SIGN_UP_URL
        if (!isSignUp){
            requestUrl = process.env.REACT_APP_SIGN_IN_URL
        }
        const backendRes = await fetch(
          requestUrl,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: profile.name,
              email: profile.email,
              auth_type: "google",
              password: null
            }),
          }
        );
        switch (backendRes.status){
          case 200: 
          case 201: {
            navigate('/')
            return;
          }
          case 401: 
          case 404: 
          case 409: 
          case 500: {
            const error = 
            CustomAlert({
            title: "Oops!",
            text: error,
            });
          return;
          }
          default:{
            CustomAlert({
            title: "Error!",
            text: `Unexpected error (${backendRes.status}). Please try again.})`,
          });
          return;
        }
      } 
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
