import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="new-card"
      title="New card"
      buttonText="Create"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type="text"
        required
        className="popup__input popup__input_type_image-title"
        name="newCardFormImageTitleInput"
        placeholder="Title"
        minLength="1"
        maxLength="30"
        id="card-add-form-title-input"
      />
      <span
        id="card-add-form-title-input-error"
        className="popup__form-error"
      ></span>
      <input
        type="url"
        required
        className="popup__input popup__input_type_image-link"
        name="newCardFormImageLinkInput"
        placeholder="Image link"
        id="card-add-form-link-input"
      />
      <span
        id="card-add-form-link-input-error"
        className="popup__form-error"
      ></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
