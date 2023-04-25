import React from "react";
import "./Profile.css";
import ProfileImage from "../images/profile-image-plantguy.png";
import EditButton from "../components/EditButton";
import AddButton from "../components/AddButton";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__avatar-container">
        <img
          className="profile__image"
          src={ProfileImage}
          alt="man with plant image"
        />
        <div className="profile__image-overlay"></div>
      </div>
      <div className="profile__info">
        <div className="profile__wrapper">
          <h1 className="profile__name">Travel Dude</h1>
          <EditButton />
        </div>
        <p className="profile__job">Explorer</p>
      </div>

      <AddButton />
    </div>
  );
}

export default Profile;
