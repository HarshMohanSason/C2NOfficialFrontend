import { React, useState, useEffect } from "react";
import "../../styles/utilities/InitialCurtainAnimation.css";

const InitialLoadingScreen = () => {
  const [animate, setAnimate] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem("hasSeenIntro");

    if (!hasSeenAnimation) {
      setShouldShow(true);
      setTimeout(() => {
        setAnimate(true);
        localStorage.setItem("hasSeenIntro", "true");
        //Setting a timeout of 2s to remove the overlay once the animation has been displayed
        setTimeout(() => {
          setShouldShow(false);
        }, 2000);
      }, 100);
    }
  }, []);

  if (!shouldShow) return null;

  return (
    <div className={`overlay ${animate ? "animate" : ""}`}>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="box">
          <div className="box-top" style={{ animationDelay: `${i * 0.2}s` }} />
          <div
            className="box-bottom"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        </div>
      ))}
    </div>
  );
};

export default InitialLoadingScreen;
