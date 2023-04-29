import React, { useState, useEffect } from "react";
import "./Cards.css";
import "./Card.css";
import BinIcon from "../images/trash-button.svg";

function Card({ src, title, card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="card">
      <button type="button" className="button" aria-label="trash">
        <img
          src={BinIcon}
          alt="trash button"
          className="button button_type_trash"
        />
      </button>
      <img onClick={handleClick} src={src} alt="" className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <div className="card__likes-container">
          <button
            type="button"
            className="button button_style_like"
            aria-label="like"
          ></button>
          <div className="card__likes"></div>
        </div>
      </div>
    </li>
  );
}

export default Card;
