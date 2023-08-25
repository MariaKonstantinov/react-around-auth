import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [cardsName, setCardsName] = useState("");
  const [cardsImageLink, setCardsImageLink] = useState("");
  const [isCardsNameValid, setIsCardsNameValid] = useState(true);
  const [isCardsImageLinkValid, setIsCardsImageLinkValid] = useState(true);
  const [cardsNameErrorMessage, setCardsNameErrorMessage] = useState("");
  const [cardsImageLinkErrorMessage, setCardsImageLinkErrorMessage] =
    useState("");

  useEffect(() => {
    setCardsName("");
    setCardsImageLink("");
    setIsCardsNameValid(true);
    setIsCardsImageLinkValid(true);
    setCardsNameErrorMessage("");
    setCardsImageLinkErrorMessage("");
  }, [isOpen]);

  const handleTitleChange = (evt) => {
    const { value, validity, validationMessage } = evt.target;
    setCardsName(value);
    setIsCardsNameValid(validity.valid);
    if (!validity.valid) {
      setCardsNameErrorMessage(validationMessage);
    }
  };

  const handleImageLinkChange = (evt) => {
    const { value, validity, validationMessage } = evt.target;
    setCardsImageLink(value);
    setIsCardsImageLinkValid(validity.valid);
    if (!validity.valid) {
      setCardsImageLinkErrorMessage(validationMessage);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({
      name: cardsName,
      link: cardsImageLink,
    });
  }

  // useEffect(() => {
  //   cardNameRef.current.value = "";
  //   cardLinkRef.current.value = "";
  // }, [isOpen]);

  return (
    <PopupWithForm
      name="new-card"
      title="New card"
      buttonText="Create"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <input
          type="text"
          required
          // className="popup__input popup__input_type_image-title"
          className={`form__input popup__input popup__input_type_image-title ${
            !isCardsNameValid && `form__input_type_error`
          }`}
          name="newCardFormImageTitleInput"
          placeholder="Title"
          minLength="1"
          maxLength="30"
          id="card-add-form-title-input"
          onChange={handleTitleChange}
          value={cardsName}
        />

        <span
          className={`form__input-error ${
            !isCardsNameValid && `form__input-error_visible`
          }`}
          id="card-add-form-title-input-error"
          // className="popup__form-error"
        >
          {cardsNameErrorMessage}
        </span>

        <input
          type="url"
          required
          // className="popup__input popup__input_type_image-link"
          className={`form__input popup__input popup__input_type_image-link ${
            !isCardsImageLinkValid && `form__input_type_error`
          }`}
          name="newCardFormImageLinkInput"
          placeholder="Image link"
          id="card-add-form-link-input"
          onChange={handleImageLinkChange}
          value={cardsImageLink}
        />

        <span
          id="card-add-form-link-input-error"
          // className="popup__form-error"
          className={`form__input-error ${
            !isCardsImageLinkValid && `form__input-error_visible`
          }`}
        >
          {cardsImageLinkErrorMessage}
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
