/* use it for the following popups: "Edit profile", "New place", "Update profile picture", "Are you sure?" (optional) */
import React from "react";

function PopupWithForm({
  isOpen,
  onClose,
  onSubmit,
  name,
  title,
  buttonText,
  children,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__window">
        <button
          type="button"
          className="button button_type_close"
          aria-label="close"
          onClick={onClose}
        ></button>

        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          {children}

          <button type="submit" className="button button_type_submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
