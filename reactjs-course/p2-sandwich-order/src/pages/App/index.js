import React from "react";
import Style from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import SandwitchBuilder from "../SandwichBuilder";

function App() {
  return (
    <div>
      <Toolbar />
      <main className={Style.Content}>
        <SandwitchBuilder />
      </main>
    </div>
  );
}

export default App;
