import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit-profile"
      title="Edit profile"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type="text"
        required
        className="popup__input popup__input_type_name"
        name="profileFormNameInput"
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
