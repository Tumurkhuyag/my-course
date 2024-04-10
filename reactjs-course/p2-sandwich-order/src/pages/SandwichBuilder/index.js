import React, { Component } from "react";
import Sandwitch from "../../components/Sandwitch";

class SandwitchBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
    },
  };

  render() {
    return (
      <div>
        <Sandwitch ingredients={this.state.ingredients} />
        <div>Орцны удирдлага</div>
      </div>
    );
  }
}

export default SandwitchBuilder;
