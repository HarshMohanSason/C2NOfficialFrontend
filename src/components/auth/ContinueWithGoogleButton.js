import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import { CustomAlert} from '../utilities/CustomAlert'

const ContinueWithGoogleButton = () => {
  const navigate = useNavigate(); 
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
        const backendRes = await fetch(process.env.REACT_APP_GOOGLE_AUTH_URL,
          {
            method: "POST",
            credentials: "include",
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
          default:{
            const error = await backendRes.text();
            CustomAlert({
            title: "Oops!",
            text: error,
          });
          return;
        }
      } 
    } catch (error) {
          CustomAlert({
          title: "Error!",
          text: error,
          });
      }
    },
    onError: () => {
       CustomAlert({
          title: "Error!",
          text: `Login failed. Please try again.`,
          });
    },
  });
  return (
    <button
      onClick={() => login()}
      type="button"
      className="google-sign-in-button">
      Continue with Google
    </button>
  );
};

export default ContinueWithGoogleButton;
