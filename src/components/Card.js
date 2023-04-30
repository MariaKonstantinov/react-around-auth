import React, { useState, useEffect } from "react";
import "./Cards.css";
import "./Card.css";
import binIcon from "../images/trash-button.svg";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="card">
      <button type="button" className="button" aria-label="trash">
        <img
          src={binIcon}
          alt="trash button"
          className="button button_type_trash"
        />
      </button>
      <img
        onClick={handleClick}
        src={card.link}
        alt="user card image"
        className="card__image"
      />
      <div className="card__content">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__likes-container">
          <button
            type="button"
            className="button button_style_like"
            aria-label="like"
          ></button>
          <div className="card__likes">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
