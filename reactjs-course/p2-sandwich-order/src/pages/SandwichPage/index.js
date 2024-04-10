import React, { Component } from "react";
import Sandwitch from "../../components/Sandwitch";
import BuildControls from "../../components/BuildControls";

const INGREDIENT_PRICES = {
  salad: 2500,
  cheese: 1500,
  bacon: 1500,
  meat: 2500,
  tomato: 1500,
};

const initialPice = 2000;

class SandwitchPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
      tomato: 0,
    },

    totalPrice: initialPice,
  };

  addIngredient = (type) => {
    console.log("====> " + type);

    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({ totalPrice: newPrice, ingredients: newIngredients });
  };

  removeIngredient = (type) => {
    console.log("====> " + type);

    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]--;

    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({ totalPrice: newPrice, ingredients: newIngredients });
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Sandwitch ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          initialPrice={initialPice}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          count={this.state.ingredients}
        />
      </div>
    );
  }
}

export default SandwitchPage;
