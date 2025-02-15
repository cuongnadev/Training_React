import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
      <li>
          <NavLink to="/resolver" className={({ isActive }) => isActive ? "active-link" : ""}>
            Resolver
          </NavLink>
        </li>
        <li>
          <NavLink to="/zod-resolver" className={({ isActive }) => isActive ? "active-link" : ""}>
            Zod Resolver
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
