import React, { useEffect, createRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInput = createRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  useEffect(() => {
    avatarInput.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Change Profile Picture"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        required
        className="popup__input popup__input_type_image-link"
        name="editAvatarFormImageLinkInput"
        placeholder="Profile Image link"
        id="avatar-edit-form-link-input"
        ref={avatarInput}
      />
      <span
        id="avatar-edit-form-link-input-error"
        className="popup__form-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
