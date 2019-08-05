import React from "react";
import "./Header.scss";

const Header = props => {
  return (
    <div className="header-bg">
      <div className="header-container">
        <h1>Stock Image Search</h1>
        <ul>
          <a href="https://kevinbrack.com">
            <li>by Kevin Brack</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
