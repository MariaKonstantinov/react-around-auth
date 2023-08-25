import React, { useEffect, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [isAvatarLinkValid, setIsAvatarLinkValid] = useState(true);
  const [avatarLinkErrorMessage, setAvatarLinkErrorMessage] = useState("");
  const avatarInput = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  useEffect(() => {
    avatarInput.current.value = "";
  }, [isOpen]);

  function handleTestValidity(evt) {
    setIsAvatarLinkValid(evt.target.validity.valid);
    setAvatarLinkErrorMessage(avatarInput.current.validationMessage);
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Change Profile Picture"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <input
          type="url"
          required
          // className="popup__input popup__input_type_image-link"
          className={`form__input popup__input popup__input_type_image-link ${
            !isAvatarLinkValid && `form__input_type_error`
          }`}
          name="editAvatarFormImageLinkInput"
          placeholder="Profile Image link"
          id="avatar-edit-form-link-input"
          onChange={handleTestValidity}
          ref={avatarInput}
        />

        <span
          className={`form__input-error ${
            !isAvatarLinkValid && `form__input-error_visible`
          }`}
          id="avatar-edit-form-link-input-error"
          // className="popup__form-error"
        >
          {avatarLinkErrorMessage}
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
