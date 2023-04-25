//import logo from "./images/around_logo_header.svg";
import React from "react";
import Header from "./Header.js";
import Profile from "./Profile.js";
import AppMain from "./AppMain.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <AppMain>
        <Profile />
      </AppMain>
      <Footer />

      {/* SECTION POPUP TYPE: EDIT PROFILE */}
      <div className="popup popup_type_edit-profile">
        <div className="popup__window">
          <button
            type="button"
            className="button button_type_close"
            aria-label="close"
          ></button>
          <h2 className="popup__title">Edit profile</h2>
          <form className="popup__form" name="profileEditForm" noValidate>
            {/* Edit Profile - name input */}
            <input
              type="text"
              required
              className="popup__input popup__input_type_name"
              name="profileFormNameInput"
              placeholder="Your name"
              minLength="2"
              maxLength="40"
              id="profile-edit-form-name-input"
            />
            <span
              id="profile-edit-form-name-input-error"
              className="popup__form-error"
            ></span>

            {/* Edit Profile - job input */}
            <input
              type="text"
              required
              className="popup__input popup__input_type_job"
              name="profileFormJobInput"
              placeholder="Your job"
              minLength="2"
              maxLength="200"
              id="profile-edit-form-job-input"
            />
            <span
              id="profile-edit-form-job-input-error"
              className="popup__form-error"
            ></span>

            <button
              type="submit"
              className="button button_type_submit button_type-submit_disabled"
              aria-label="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      {/* SECTION POPUP TYPE: ADD NEW CARD */}
      <div className="popup popup_type_new-card">
        <div className="popup__window">
          <button
            type="button"
            className="button button_type_close"
            aria-label="close"
          ></button>
          <h2 className="popup__title">New card</h2>
          <form className="popup__form" name="newCardAddForm" noValidate>
            <input
              type="text"
              required
              className="popup__input popup__input_type_image-title"
              name="newCardFormImageTitleInput"
              placeholder="Title"
              minLength={1}
              maxLength={30}
              id="card-add-form-title-input"
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
            />
            <span
              id="card-add-form-link-input-error"
              className="popup__form-error"
            ></span>

            <button
              type="submit"
              className="button button_type_submit button_type-submit_disabled"
              aria-label="submit"
              disabled
            >
              Create
            </button>
          </form>
        </div>
      </div>

      {/* SECTION POPUP TYPE: ZOOM CARD */}
      <section className="popup popup_type_zoom-card">
        <div className="popup__window popup__zoom-wrapper">
          <button
            className="button button_type_close button_type_zoom-card"
            type="button"
            aria-label="close"
          ></button>
          <img className="popup__zoom-image" src="#" alt="#" />
          <p className="popup__zoom-title"></p>
        </div>
      </section>

      {/* SECTION POPUP TYPE: EDIT PROFILE */}
      <div className="popup popup_type_edit-avatar">
        <div className="popup__window">
          <button
            type="button"
            className="button button_type_close"
            aria-label="close"
          ></button>
          <h2 className="popup__title">Change Profile Picture</h2>
          <form className="popup__form" name="profileAvatarEditForm" noValidate>
            {/* image link input */}
            <input
              type="url"
              required
              className="popup__input popup__input_type_image-link"
              name="editAvatarFormImageLinkInput"
              placeholder="Image link"
              id="avatar-edit-form-link-input"
            />
            <span
              id="avatar-edit-form-link-input-error"
              className="popup__form-error"
            ></span>

            <button
              type="submit"
              className="button button_type_submit button_type-submit_disabled"
              aria-label="submit"
              disabled
            >
              Save
            </button>
          </form>
        </div>
      </div>

      {/* SECTION POPUP TYPE: DELETE POPUP */}
      <div className="popup popup_type_delete-card">
        <div className="popup__window">
          <button
            type="button"
            className="button button_type_close"
            aria-label="close"
          ></button>
          <h2 className="popup__title">Are you sure?</h2>
          <form className="popup__form" name="cardDeleteForm" noValidate>
            <button
              type="submit"
              className="button button_type_submit"
              aria-label="submit"
            >
              Yes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
