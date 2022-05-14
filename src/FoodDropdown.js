import { render } from '@testing-library/react';
import React from 'react';

export default class FoodDropdown extends React.Component {
  onSelect = (e) => {
    this.props.setFoodId(e.target.value);
  };
  render() {
    return (
      <div>
        <h3>Entree</h3>
        <select onChange={this.onSelect}>
          <option value="food-1">Nigiri</option>
          <option value="food-2">Shrimp Tempura Roll</option>
          <option value="food-3">Spicy Tuna Hand Rolls</option>
        </select>
      </div>
    );
  }
}
