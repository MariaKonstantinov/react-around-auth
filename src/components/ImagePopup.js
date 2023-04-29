import React, { useState, useEffect } from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_zoom-card ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__window popup__zoom-wrapper">
        <button
          className="button button_type_close button_type_zoom-card"
          type="button"
          aria-label="close"
          onClick={props.onClose}
        ></button>
        <img className="popup__zoom-image" src={props.card.link} alt="#" />
        <p className="popup__zoom-title">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
