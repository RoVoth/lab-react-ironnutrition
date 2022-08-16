import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddNewFood(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };
  const handleServingsChange = (event) => {
    setServings(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    props.AddNewFood(newFood);
  };

  return (
    <form id="formnew" onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <input
        value={image}
        name="image"
        type="text"
        onChange={handleImageChange}
      />

      <label>Calories</label>
      <input
        value={calories}
        name="calories"
        type="number"
        onChange={handleCaloriesChange}
      />

      <label>Servings</label>
      <input
        value={servings}
        name="servings"
        type="number"
        onChange={handleServingsChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddNewFood;
