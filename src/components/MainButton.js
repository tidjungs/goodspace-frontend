import React from 'react';
import { Link } from "react-router-dom";

const MainButton = ({ img, title, subTitle, path }) => (
  <Link to={path}>
    <div className="main-button">
      <img className="main-button-img" src={img} alt="" /><br />
      <label className="main-button-title">{title}</label>
      <label className="main-button-sub-title">{subTitle}</label>
    </div>
  </Link>
)

export default MainButton;
