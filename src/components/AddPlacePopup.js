import React, { useEffect, createRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const cardNameRef = createRef("");
  const cardLinkRef = createRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  }

  useEffect(() => {
    cardNameRef.current.value = "";
    cardLinkRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="new-card"
      title="New card"
      buttonText="Create"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        ref={cardNameRef}
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
        ref={cardLinkRef}
      />
      <span
        id="card-add-form-link-input-error"
        className="popup__form-error"
      ></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
