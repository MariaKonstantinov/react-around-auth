import React, { useState, useEffect } from "react";
import "./AppMain.css";
import "./Profile.css";
import "./Popup.css";
import "./Button.css";
import Card from "./Card.js";

function AppMain(props) {
  return (
    <div className="content">
      {/* PROFILE */}
      <div className="profile">
        <div
          className="profile__avatar-container"
          onClick={props.onEditAvatarClick}
        >
          <img
            className="profile__image"
            src={props.userAvatar}
            alt="man with plant image"
          />
          <div className="profile__image-overlay"></div>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">{props.userName}</h1>
            <button
              onClick={props.onEditProfileClick}
              type="button"
              className="button button_type_edit"
              aria-label="edit"
            ></button>
          </div>
          <p className="profile__job">{props.userDescription}</p>
        </div>

        <button
          onClick={props.onAddPlaceClick}
          type="button"
          className="button button_type_add"
          aria-label="add"
        ></button>
      </div>

      {/* CARDS */}
      <section className="cards">
        <ul className="cards__grid">
          <Card />
          {props.cards.map((card) => (
            <Card
              src={card.link}
              title={card.name}
              card={card}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AppMain;
