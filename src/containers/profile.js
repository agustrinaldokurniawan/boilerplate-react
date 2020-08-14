import React from "react";

const Profile = (props) => {
  const username = props.match.params.username;
  return (
    <div>
      <h1>Profile {username && username}</h1>
    </div>
  );
};

export default Profile;
