import React from "react";
import "./Box.css";

function Box({ title, children }) {
  return (
    <div className="box">
      <h3 className="box-title">{title}</h3>
      <div className="box-content">{children}</div>
    </div>
  );
}

export default Box;
