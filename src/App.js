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

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [dessertId, setDessertId] = useState(1);
  const [orderName, setOrderName] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [instructionsForm, setInstructionsForm] = useState('');

  function handleOrderNameChange(e) {
    setOrderName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionsForm]);
    setInstructionsForm('');
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} dessertId={dessertId} />
      <h1>{orderName}&apos;s Fast Food Order!</h1>
      <OrderNameInput handleOrderNameChange={handleOrderNameChange} />
      <section className="dropdowns">
        <FoodDropdown setFoodId={setFoodId} />
        <SideDropdown setSideId={setSideId} />
        <DrinkDropdown setDrinkId={setDrinkId} />
        <DessertDropdown setDessertId={setDessertId} />
      </section>
      <InstructionsForm
        instructionsForm={instructionsForm}
        handleSubmit={handleSubmit}
        setInstructionsForm={setInstructionsForm}
      />
      <InstructionsList instructions={instructions} />
    </div>
  );
}

export default App;
