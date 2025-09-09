import React, { useEffect } from "react";
import "./Home.scss";
import { initializeAnimation } from "./animation.js";

const Home = () => {
  useEffect(() => {
    initializeAnimation();
  }, []);

  return (
    <div className="demo-1">
      <div className="content">
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas"></canvas>
          <div className="header">
            <h1 className="header__title main-title">trich</h1>
            <p className="header__subtitle">
              Intelligent solutions to extract the most valuable insights of
              your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
