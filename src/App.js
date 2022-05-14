import './App.css';
import { useState } from 'react';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import DessertDropdown from './DessertDropdown';
import InstructionsList from './InstructionsList';
import InstructionsForm from './InstructionsForm';
import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';
import BackgroundImage from './background.png';
import { render } from '@testing-library/react';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';


export default class App extends React.Component {
    constructor() {
      super();
      this.state = {
        foodId: 'food-1',
        sideId: 'side-1',
        drinkId: 'drink-1',
        dessertId: 'dessert-1',
        orderName: '',
        instructions: [],
        instructionsForm: ''
      };
    }}

    handleSubmit(e) {
    e.preventDefault();
    this.setState([...this.state.instructions, this.state.instructionsForm]);
    this.setState('');
  }

    handleFoodChange = (foodId) => {
      this.setState({foodId: foodId})
    }

  render() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
        }}
      >
        <h1>Welcome {this.state.orderName}! Place your Sushi House order below.</h1>

        <OrderNameInput setOrderName={this.setState.orderName} />
        <div className="food-images">
          <OrderImages foodId={this.state.foodId} sideId={this.state.sideId} drinkId={this.state.drinkId} dessertId={this.state.dessertId} />
        </div>
        <section className="bottom">
          <div className="dropdowns">
            <FoodDropdown setFoodId={this.handleFoodChange} />
            <SideDropdown setSideId={this.setState({sideId: this.props.sideId})} />
            <DrinkDropdown setDrinkId={this.setState({drinkId: this.props.drinkId})} />
            <DessertDropdown setDessertId={this.setState({dessertId: this.props.dessertId})} />
          </div>
          <div className="instructions">
            <InstructionsForm
              instructionsForm={this.state.instructionsForm}
              handleSubmit={this.handleSubmit}
              setInstructionsForm={this.state.setInstructionsForm}
            />
            <InstructionsList instructions={this.state.instructions} />
          </div>
        </section>
      </header>
    </div>
  );
}



