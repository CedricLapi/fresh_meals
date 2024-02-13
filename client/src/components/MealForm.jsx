import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MealForm = () => {
  const [meal, setMeal] = useState({
    name: '',
    duration: '',
    directions: ''
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setMeal({
      ...meal,
      [e.target.name]: e.target.value
    });
  };

  const formValidator = () => {
    let isValid = true;
    const newErrors = {};

    if (meal.name.length < 3 || meal.name.length > 20) {
      newErrors.name = 'Dish Name must be between 3 and 20 characters';
      isValid = false;
    }

    if (meal.duration.length < 2 || meal.duration.length > 240) {
      newErrors.duration = 'Duration must be between 2 and 240 characters';
      isValid = false;
    }

    if (meal.directions.length < 10) {
      newErrors.directions = 'Directions must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  // create a meal
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValidator()) {
      axios.post('http://localhost:8000/api/meals/new', meal)
        .then(res => {
          console.log(res);
          navigate('/api/meals');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
        <h3 className='mx-auto'>Add the next culinary masterpiece!</h3>

      <Link to="/api/meals" className="ml-auto">back to home</Link>



      {errors.name && <p className="text-danger">{errors.name}</p>}
      {errors.duration && <p className="text-danger">{errors.duration}</p>}
      {errors.directions && <p className="text-danger">{errors.directions}</p>}

      <form action="" className="col-md-6 offset-2" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Dish Name:</label>
          <input type="text" className="form-control" name="name" id="name" onChange={onChangeHandler} />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Total Minutes:</label>
          <input type="number" className="form-control" name="duration" id="duration" onChange={onChangeHandler} />
        </div>

        <div className="form-group">
          <label htmlFor="directions">Directions:</label>
          <input type="text" className="form-control" name="directions" id="directions" onChange={onChangeHandler} />
        </div>

        <button className="btn btn-info mt-3">Create</button>
      </form>
    </div>
  );
};

export default MealForm;