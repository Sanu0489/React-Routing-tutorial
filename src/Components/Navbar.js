import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div >
      <h1>React Routing Demo</h1>
      <nav> 
        <ul>
          <li>
            <NavLink style={({ isActive }) => {
              return {
                display: "flex",
		margin: "1rem 0",
                padding: "1rem 0",
                fontStyle: "italic",
                color: isActive ? "red" : "green"
              };
            }} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => {
              return {
                display: "flex",
		margin: "1rem 0",
                padding: "1rem 0",
                fontStyle: "italic",
                color: isActive ? "red" : "purple"
              };
            }} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => {
              return {
                display: "flex",
		margin: "1rem 0",
                padding: "1rem 0",
                fontStyle: "italic",
                color: isActive ? "red" : "orange"
              };
            }} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
