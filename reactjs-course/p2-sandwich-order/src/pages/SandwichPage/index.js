import React, { Component } from "react";
import Sandwich from "../../components/Sandwich";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 2500,
  cheese: 1500,
  bacon: 1500,
  meat: 2500,
  tomato: 1500,
};

const INGREDIENT_NAMES = {
  meat: "Үхрийн мах",
  cheese: "Бяслаг",
  salad: "Салад",
  bacon: "Гахайн мах",
  tomato: "Улаан лооль",
};

const initialPice = 2000;

class SandwichPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
      tomato: 0,
    },

    confirmOrder: false,

    totalPrice: initialPice,
  };

  continueOrder = () => {
    console.log("Үргэлжлүүх товч дарагдлаа");
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  addIngredient = (type) => {
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
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}>
          <OrderSummary
            onCancel={this.closeConfirmModal}
            onContinue={this.continueOrder}
            price={this.state.totalPrice}
            ingredientNames={INGREDIENT_NAMES}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Sandwich ingredients={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientNames={INGREDIENT_NAMES}
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

export default SandwichPage;
