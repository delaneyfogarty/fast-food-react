import './App.css';
import { useState } from 'react';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import InstructionsList from './InstructionsList';
import InstructionsForm from './InstructionsForm';
import OrderNameInput from './OrderNameInput';
import OrderName from './OrderName';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSetId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [order, setOrder] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [instructionsForm, setInstructionsForm] = useState('');
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
