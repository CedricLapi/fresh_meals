import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const MealDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [oneMeal, setoneMeal] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/meals/${id}/details`)
            .then(res => setoneMeal(res.data.meal))
            .catch(err => console.log(err))

    }, [])

    //Delete Meal
    const deleteMeal = (e) => {
      axios.delete(`http://localhost:8000/api/meals/${id}`)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      navigate("/api/meals")
    }

    const navigateToEditMeal = (_id) => {
      navigate(`/api/meals/${_id}/edit`)
    }
  return (
    <div>
            <Link to="/api/meals" className="ml-auto">back to home</Link>

        <h1>Dish Name: {oneMeal.name}</h1>
        <h2>Dish Duration: {oneMeal.duration}minutes</h2>
        <h2>Recipe Directions: {oneMeal.directions}</h2>
        
        <button className="btn btn-info mr-3" onClick={(e) => navigateToEditMeal(oneMeal._id)}>Edit</button>
        <button className="btn btn-danger" onClick={deleteMeal}>Remove</button>
    </div>
  )
}

export default MealDetails