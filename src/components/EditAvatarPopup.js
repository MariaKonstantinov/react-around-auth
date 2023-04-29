import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit-avatar"
      title="Change Profile Picture"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type="url"
        required
        className="popup__input popup__input_type_image-link"
        name="editAvatarFormImageLinkInput"
        placeholder="Image link"
        id="avatar-edit-form-link-input"
      />
      <span
        id="avatar-edit-form-link-input-error"
        className="popup__form-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
