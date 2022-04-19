import { Link } from "react-router-dom";
import "./Auth.css";

export function SignUp() {
  return (
    <div className="auth-container flex-center">
      <div className="auth-main-container flex-center">
        <div className="auth-title">
          <h2 className="text-center">Sign Up</h2>
        </div>
        <div className="auth-main">
          <div className="sign-up-wrapper">
            <div className="auth-firstname">
              <label htmlFor="firstname">First Name</label>
              <input placeholder="Test" className="text-input" type="text" />
            </div>
            <div className="auth-lastname">
              <label htmlFor="lastname">Last Name</label>
              <input placeholder="Admin" className="text-input" type="text" />
            </div>
          </div>
          <div className="auth-email">
            <label htmlFor="mail">Email Address</label>
            <input placeholder="test@gmail.com" className="text-input" type="text" />
          </div>
          <div className="auth-pwd">
            <label htmlFor="pwd">Password</label>
            <input placeholder="***********" className="pwd-input" type="password" />
          </div>
          <div className="auth-checkbox">
            <label className="select-input">
              <input type="checkbox" name="light" className="checkbox-input" value="" />
              <span className="text">I accept all Terms & Conditions</span>
            </label>
          </div>
          <div className="primary-btn text-center">
            <button className="link-btn">Create New Account</button>
          </div>
          <div className="auth-secondary-btn text-center">
            <Link to="/sign-in">
              Already have an account <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
