import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/auth-context";
import "./Navbar.css";

export function Navbar() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const userHandler = () => {
    token ? navigate("/user-profile") : navigate("/sign-in");
  };
  return (
    <div className="navbar nav-fixed">
      <div className="navbar-left">
        <NavLink to="/">
          <h3 className="nav-title">Quiz Me</h3>
        </NavLink>
      </div>
      <div className="navbar-right" onClick={userHandler}>
        <i className="fa fa-user profile-icon" aria-hidden="true"></i>
      </div>
    </div>
  );
}
