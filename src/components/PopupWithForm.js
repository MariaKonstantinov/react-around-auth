/* use it for the following popups: "Edit profile", "New place", "Update profile picture", "Are you sure?" (optional) */
import React, { useEffect, useRef, useState } from "react";

function PopupWithForm({
  isOpen,
  onClose,
  onSubmit,
  name,
  title,
  buttonText,
  children,
  isTooltipOpen,
}) {
  const formRef = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(formRef.current.checkValidity());
  }, [isOpen, formRef]);

  function handleFormChange() {
    setIsFormValid(formRef.current.checkValidity());
  }

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
        <form
          className="popup__form"
          name={name}
          ref={formRef}
          onChange={handleFormChange}
          onSubmit={onSubmit}
        >
          {children}

          {!isTooltipOpen && (
            <fieldset className="form__fieldset">
              <button
                className={`form__button ${
                  !isFormValid && `form__button_disabled `
                } button button_type_${name}`}
                type="submit"
              >
                {buttonText}
              </button>
            </fieldset>
          )}

          <button type="submit" className="button button_type_submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
