import "../css/Avatar.css";
import React from "react";

const Avatar = (props) => {
  const { id } = props;
  let name = props.name.split(" ").join("_");

  return (
    <div
      id={id}
      style={{ backgroundImage: `url("/images/${name}_avatar.jpg")` }}
      className="avatar"
    ></div>
  );
};

export default Avatar;
