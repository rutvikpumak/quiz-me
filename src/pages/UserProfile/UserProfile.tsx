import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/auth-context";
import { logout } from "../../services/auth-service";
import "./UserProfile.css";

export function UserProfile() {
  const { setToken, setUser, userInfo } = useAuth();
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setUser("");
    logout();
    navigate("/");
  };

  return (
    <div className="profile-container">
      <div className="profile-main-container">
        <h1>Account</h1>
        <div className="profile-main">
          <div className="tab">
            <div className="profile-details">
              <h3 className="details-header">
                <i className="fa fa-user" aria-hidden="true"></i>Profile Details
              </h3>
              <div className="profile-details-main">
                <div>
                  <h3 className="paragraph-md">Full Name</h3>
                  <h3 className="paragraph-md">Email</h3>
                </div>
                <div>
                  <p className="paragraph-md"> {userInfo?.name}</p>
                  <p className="paragraph-md">{userInfo?.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tab">
            <h3 className="details-header">
              <i className="fa fa-cog" aria-hidden="true"></i>Settings
            </h3>
            <button className="btn danger setting-logout" onClick={logOutHandler}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
