import React, { Component } from "react";
import Style from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import SandwichPage from "../SandwichPage";
import SideBar from "../../components/SideBar";

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />

        <main className={Style.Content}>
          <SandwichPage />
        </main>
      </div>
    );
  }
}
export default App;
