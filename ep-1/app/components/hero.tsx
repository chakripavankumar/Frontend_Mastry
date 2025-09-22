import React from "react";

const Hero = () => {
  return (
    <div className="hero-root">
      <div className="badge">
        what are form 1099 filling requirements?
        <span className="arrow">
          <svg width="16" height="16" fill="none">
            <path
              stroke="#1E1F25"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".5"
              stroke-width="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </span>
      </div>
      <h1 className="hero-text">Magically simplyfiying accounting and taxes</h1>
      <p className="hero-desc">
        Automated bookeeping,effortless tax filling , real-time insights. Setup
        in 10 mins. back to building by 4:29pm
      </p>
      <div className="hero-cta">
        <button className="btn">Get Started</button>
        <button className="btn-second">
          <span>Priceing</span>
          <svg width="16" height="16" fill="none">
            <path
              stroke="#1E1F25"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".5"
              stroke-width="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
