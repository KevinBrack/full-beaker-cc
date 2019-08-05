import React from "react";
import "./Footer.scss";

const Footer = props => {
  return (
    <div className="footer-container">
      <div>Search results provided by Pixabay</div>
      <a href="https://pixabay.com/">
        <img
          src="https://pixabay.com/static/img/public/leaderboard_a.png"
          alt="Pixabay"
        />
      </a>
      <div>©2019 Kevin Brack</div>
    </div>
  );
};

export default Footer;
