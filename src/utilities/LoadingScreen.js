import React from 'react';
import '../styles/utilities/LoadingScreen.css';

function LoadingScreen({ text = "Loading..." }) {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}

export default LoadingScreen;