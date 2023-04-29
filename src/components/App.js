import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import AppMain from "./AppMain.js";
import Footer from "./Footer.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ImagePopup from "./ImagePopup.js";
import { api } from "../utils/api.js";

function App() {
  // SECTION: STATE DEFINITION - SET STATE FOR INITIAL STATE ------------------>

  // Popups
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  // Edit Profile
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  // Cards
  const [cards, setCards] = useState([]);

  // SECTION: requesting initial data fron server (Edit Profile, Cards) -------------------->

  useEffect(() => {
    // edit profile
    api
      .getUserData()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((err) => console.log(err));

    // cards
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  // SECTION: POPUPS STATE DEFINITION - SET STATE FOR OPENED STATE -------------------->

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setIsCardPopupOpen(true);
    setSelectedCard(card);
  };

  // SECTION: POPUPS STATE DEFINITION - SET STATE FOR CLOSED STATE -------------------->

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsCardPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="App">
      <Header />
      <AppMain
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        userName={userName}
        userDescription={userDescription}
        userAvatar={userAvatar}
        onCardClick={handleCardClick}
        cards={cards}
      />
      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      <ImagePopup
        card={selectedCard}
        isOpen={isCardPopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
