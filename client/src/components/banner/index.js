import React from "react";
import "./style.css";

function Banner({ children }) {
  return (
        <div className="banner valign-wrapper">
            {children}
        </div>
  );
}

export default Banner;
