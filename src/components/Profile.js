import React from "react";
import "../css/Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import ProfileFooter from "./ProfileFooter";

const Profile = (props) => {
  const { targetEmployee } = props;
  const { backToEmployeeSearch } = props;

  return (
    <div className="profile-container">
      <ProfileHeader backToEmployeeSearch={backToEmployeeSearch} />
      <ProfileContent targetEmployee={targetEmployee} />
      <ProfileFooter />
    </div>
  );
};

export default Profile;
