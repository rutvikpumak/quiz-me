import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/">
          <h3 className="nav-title" title="Home">
            Quiz Me
          </h3>
        </Link>
      </div>
      <div className="navbar-right">
        <div>
          <Link to="/dashboard">
            <h5>Dashboard</h5>
          </Link>
        </div>
        <i
          className="fa fa-user profile-icon"
          aria-hidden="true"
          title="Your Account"
          onClick={userHandler}
        ></i>
      </div>
    </div>
  );
}
