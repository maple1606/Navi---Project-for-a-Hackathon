import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CharacterCard from "./Character";

const Button = ({ styles }) => (
  <NavLink to="/card">
  <button
    type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
    
  </button>
  </NavLink>
);

export default Button;
