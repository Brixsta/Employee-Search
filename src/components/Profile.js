import React from "react";
import "../css/Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import ProfileFooter from "./ProfileFooter";

const Profile = (props) => {
  const { backToEmployeeSearch } = props;
  return (
    <div className="profile-container">
      <ProfileHeader backToEmployeeSearch={backToEmployeeSearch} />
      <ProfileContent />
      <ProfileFooter />
    </div>
  );
};

export default Profile;
