import React from "react";
import "./AppMain.css";
import Profile from "./Profile.js";

function AppMain() {
  return (
    <div className="content">
      <Profile />
    </div>
  );
}

export default AppMain;

// add Cards section
// in AppMain we have only Profile and Cards section
//Header and Footer go separately directly to App.js
