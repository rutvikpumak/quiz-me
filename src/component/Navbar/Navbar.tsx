import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <div className="navbar nav-fixed">
      <div className="navbar-left">
        <NavLink to="/">
          <h3 className="nav-title">Quiz Me</h3>
        </NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="sign-in">
          <i className="fa fa-user profile-icon" aria-hidden="true"></i>
        </NavLink>
      </div>
    </div>
  );
}
