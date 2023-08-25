import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // Subscription to the context
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");

  // After loading the current user from the API, their data will be used in managed components
  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
    setIsNameValid(true);
    setIsDescriptionValid(true);
    setNameErrorMessage("");
    setDescriptionErrorMessage("");
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    // setName(e.target.value);

    const { value, validity, validationMessage } = e.target;
    setName(value);
    setIsNameValid(validity.valid);
    if (!validity.valid) {
      setNameErrorMessage(validationMessage);
    }
  }

  function handleChangeDescription(e) {
    // setDescription(e.target.value);
    const { value, validity, validationMessage } = e.target;
    setDescription(value);
    setIsDescriptionValid(validity.valid);
    if (!validity.valid) {
      setDescriptionErrorMessage(validationMessage);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Passing the values of the managed components to the external handler
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Edit profile"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <input
          type="text"
          required
          // className="popup__input popup__input_type_name"
          className={`form__input popup__input popup__input_type_name ${
            !isNameValid && `form__input_type_error`
          }`}
          name="profileFormNameInput"
          onChange={handleChangeName}
          // value={name || ""}
          value={name}
          placeholder="Your name"
          minLength="2"
          maxLength="40"
          id="profile-edit-form-name-input"
        />

        <span
          id="profile-edit-form-name-input-error"
          // className="popup__form-error"
          className={`form__input-error ${
            !isNameValid && `form__input-error_visible`
          }`}
        >
          {nameErrorMessage}
        </span>

        <input
          type="text"
          required
          // className="popup__input popup__input_type_job"
          className={`form__input popup__input popup__input_type_job ${
            !isDescriptionValid && `form__input_type_error`
          }`}
          name="profileFormJobInput"
          onChange={handleChangeDescription}
          // value={description || ""}
          value={description}
          placeholder="Your job"
          minLength="2"
          maxLength="200"
          id="profile-edit-form-job-input"
        />

        <span
          id="profile-edit-form-job-input-error"
          // className="popup__form-error"
          className={`form__input-error ${
            !isDescriptionValid && `form__input-error_visible`
          }`}
        >
          {descriptionErrorMessage}
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
