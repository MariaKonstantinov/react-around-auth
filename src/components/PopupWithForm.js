/* use it for the following popups: "Edit profile", "New place", "Update profile picture", "Are you sure?" (optional) */
import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__window">
        <button
          type="button"
          className="button button_type_close"
          aria-label="close"
          onClick={props.onClose}
        ></button>

        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          name={props.name}
          onSubmit={props.onSubmit}
          noValidate
        >
          {props.children}

          <button type="submit" className="button button_type_submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
