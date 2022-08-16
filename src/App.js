import './App.css';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import AddNewFood from './components/AddNewFood';
import SearchBar from './components/SearchBar';
import FoodBox from './components/FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const addNewFood = (food) => {
    setFoodList([...foodList, food]);
  };

  return (
    <div className="App">
      {<AddNewFood addNewFood={addNewFood} />}

      <Button> Hide Form / Add New Food </Button>

      <SearchBar />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map((eachFood) => {
          return (
            <div key={eachFood}>
              <FoodBox eachFood={eachFood} />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
