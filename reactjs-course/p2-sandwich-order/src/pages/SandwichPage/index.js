import React, { Component } from "react";
import Sandwich from "../../components/Sandwich";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";

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
  bacon: "Шарсан гахайн мах",
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

    lastCustomerName: "N/A",

    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        let arr = Object.entries(response.data);
        arr = arr.reverse();
        arr.forEach((el) =>
          console.log(el[1].deliveryAddress.name + " ===> " + el[1].price)
        );
        const lastOrder = arr[0][1];

        this.setState({
          ingredients: lastOrder.ingredients,
          totalPrice: lastOrder.price,
          lastCustomerName: lastOrder.deliveryAddress.name,
        });
      })
      .catch((err) => console.log(err))
      .finally(this.setState({ loading: false }));
  };

  continueOrder = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      deliveryAddress: {
        name: "Amgaa",
        city: "Ulaanbaatar",
        district: "Chingeltei",
      },
    };
    this.setState({ loading: true });
    axios
      .post("/orders.json", order)
      .then((response) => {})
      .finally(() => {
        this.setState({ loading: false });
      });
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
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              price={this.state.totalPrice}
              ingredientNames={INGREDIENT_NAMES}
              ingredients={this.state.ingredients}
            />
          )}
        </Modal>

        <Sandwich ingredients={this.state.ingredients} />
        <p
          style={{
            margin: "0",
            marginBottom: "10px",
            with: "100%",
            textAlign: "center",
          }}>
          Сүүлийн захиалагч: {this.state.lastCustomerName}
        </p>
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
