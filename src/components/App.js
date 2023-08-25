import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { auth } from "../utils/auth";
import { AccountContext } from "../contexts/AccountContext";
import ProtectedRoute from "./ProtectedRoute";

// App components
import Header from "./Header.js";
import Footer from "./Footer.js";
import AppFullContent from "./AppFullContent.js";
import Login from "./Login";
import Register from "./Register";
import InfoToolTip from "./InfoToolTip";

function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);

  const [accountData, setAccountData] = useState({ _id: "", email: "" });

  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [isInfoToolTipAction, setIsInfoToolTipAction] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setAccountData(res.data);
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [history]);

  const closeAllTooltips = () => {
    setIsInfoToolTipOpen(false);

    setListener(false);
  };

  const closeOnEscape = (evt) => {
    if (evt.key === "Escape") {
      closeAllTooltips();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  };

  const login = (userData) => {
    setLoggedIn(true);
    setAccountData(userData);
    history.push("/");
  };

  const setListener = (listen) => {
    listen
      ? document.addEventListener("keydown", closeOnEscape)
      : document.removeEventListener("keydown", closeOnEscape);
  };

  function handleRegister(credentials) {
    setIsLoading(true);
    auth
      .register(credentials)
      .then((res) => {
        setIsInfoToolTipAction("successful");

        login(res.data);
      })
      .catch((err) => {
        console.log(`${err} one of the fields was filled in incorrectly`);
        setIsInfoToolTipOpen(true);
        setIsInfoToolTipAction("unsuccessful");
      })
      .finally(() => {
        setListener(true);
        setIsLoading(false);

        setIsInfoToolTipOpen(true);
      });
  }

  function handleLogin(credentials) {
    setIsLoading(true);
    return auth
      .login(credentials)
      .then((res) => {
        login(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsInfoToolTipOpen(true);
        setIsInfoToolTipAction("unsuccessful");
        console.log(`${err} the user with the specified email not found`);
      })
      .finally(() => {
        setListener(true);
        setIsLoading(false);
      });
  }

  function handleShowTooltip(success, text) {
    setIsSuccess(success);
    setIsInfoToolTipAction(text);
    setIsInfoToolTipOpen(true);
  }

  return (
    <AccountContext.Provider value={{ loggedIn, accountData }}>
      <div className="App">
        <Header
          loggedIn={loggedIn}
          userEmail={accountData.email}
          handleLogout={handleLogout}
        />

        <Switch>
          <ProtectedRoute
            exact
            path="/"
            component={AppFullContent}
            loggedIn={loggedIn}
          />

          <Route path="/signin">
            <Login
              handleLogin={handleLogin}
              showTooltip={handleShowTooltip}
              isLoading={isLoading}
            />
          </Route>

          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              showTooltip={handleShowTooltip}
              isLoading={isLoading}
            />
          </Route>

          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>

        <InfoToolTip
          isOpen={isInfoToolTipOpen}
          onClose={closeAllTooltips}
          isSuccess={isSuccess}
          action={isInfoToolTipAction}
          isToolTipOpen={isInfoToolTipOpen}
          name="tooltip"
        />
        <Footer />
      </div>
    </AccountContext.Provider>
  );
}

export default App;
