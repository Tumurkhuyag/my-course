import React, { Component } from "react";
import Sandwitch from "../../components/Sandwitch";
import BuildControls from "../../components/BuildControls";

class SandwitchBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
      tomato: 0,
    },
  };

  addIngredient = (type) => {
    console.log("====> " + type);

    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;

    this.setState({ ingredients: newIngredients });
  };

  removeIngredient = (type) => {
    console.log("====> " + type);

    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]--;

    this.setState({ ingredients: newIngredients });
  };

  render() {
    return (
      <div>
        <Sandwitch ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
        />
      </div>
    );
  }
}

export default SandwitchBuilder;
