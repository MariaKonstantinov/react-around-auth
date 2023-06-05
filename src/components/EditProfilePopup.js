import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // adding name and description state variables
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Subscription to the context
  const currentUser = useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Passing the values of the managed components to the external handler
    onUpdateUser({
      name,
      about: description,
    });
  }

  // After loading the current user from the API, their data will be used in managed components
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit-profile"
      title="Edit profile"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        required
        className="popup__input popup__input_type_name"
        name="profileFormNameInput"
        onChange={handleChangeName}
        value={name || ""}
        placeholder="Your name"
        minLength="2"
        maxLength="40"
        id="profile-edit-form-name-input"
      />
      <span
        id="profile-edit-form-name-input-error"
        className="popup__form-error"
      ></span>

      <input
        type="text"
        required
        className="popup__input popup__input_type_job"
        name="profileFormJobInput"
        onChange={handleChangeDescription}
        value={description || ""}
        placeholder="Your job"
        minLength="2"
        maxLength="200"
        id="profile-edit-form-job-input"
      />
      <span
        id="profile-edit-form-job-input-error"
        className="popup__form-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
