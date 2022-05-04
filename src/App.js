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

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [dessertId, setDessertId] = useState(1);
  const [orderName, setOrderName] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [instructionsForm, setInstructionsForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionsForm]);
    setInstructionsForm('');
  }
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
        }}
      >
        <h1>Welcome {orderName}! Place your Sushi House order below.</h1>

        <OrderNameInput setOrderName={setOrderName} />
        <div className="food-images">
          <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} dessertId={dessertId} />
        </div>
        <section className="bottom">
          <div className="dropdowns">
            <FoodDropdown setFoodId={setFoodId} />
            <SideDropdown setSideId={setSideId} />
            <DrinkDropdown setDrinkId={setDrinkId} />
            <DessertDropdown setDessertId={setDessertId} />
          </div>
          <div className="instructions">
            <InstructionsForm
              instructionsForm={instructionsForm}
              handleSubmit={handleSubmit}
              setInstructionsForm={setInstructionsForm}
            />
            <InstructionsList instructions={instructions} />
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
