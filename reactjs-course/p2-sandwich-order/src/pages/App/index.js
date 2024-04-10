import React from "react";
import "./style.css";

import Toolbar from "../../components/Toolbar";
import SandwitchBuilder from "../SandwichBuilder";

function App() {
  return (
    <div>
      <Toolbar />
      <main className="Content">
        <SandwitchBuilder />
      </main>
    </div>
  );
}

export default App;
