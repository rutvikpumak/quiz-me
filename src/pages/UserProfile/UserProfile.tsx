import "./UserProfile.css";
export function UserProfile() {
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
                  <p className="paragraph-md"> Admin</p>
                  <p className="paragraph-md"> admin@test.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tab">
            <h3 className="details-header">
              <i className="fa fa-cog" aria-hidden="true"></i>Settings
            </h3>
            <button className="btn danger setting-logout">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
