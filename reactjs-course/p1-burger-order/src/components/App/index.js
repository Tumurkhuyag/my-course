import React, { useState } from "react";
import logo from "./logo.svg";
import "./style.css";

import { Comment } from "../Comment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Component Library</p>

        <div>
          <Comment commentor="Tom" />
        </div>

        <div className="divider"></div>

        {/* <div className="buttonList">
          <Button variant="Primary" value="Button" />
          <Button variant="Secondary" />
          <Button variant="Destructive" />
          <Button variant="Outlined" />
          <Button variant="Ghost" />
          <Button variant="Link" />
        </div> */}
      </header>
    </div>
  );
}

export default App;
