import React from "react";
import Style from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import SandwitchPage from "../SandwichPage";

function App() {
  return (
    <div>
      <Toolbar />
      <main className={Style.Content}>
        <SandwitchPage />
      </main>
    </div>
  );
}

export default App;
