import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const MealEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneMeal, setOneMeal] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/meals/${id}/details`)
            .then(res => setOneMeal(res.data.meal))
            .catch(err => console.log(err));
    }, [id]); 

    const changeHandler = (e) => {
        setOneMeal({
            ...oneMeal,
            [e.target.name]: e.target.value
        });
    };

    //Edit Meal
    const editMeal = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/meals/${id}/edit`, oneMeal)
            .then(res => {
                console.log("Meal edited successfully:", res.data);
                navigate("/api/meals");
            })
            .catch(err => console.log("Error editing meal:", err));
    };

    return (
        <div>
                <Link to={`/api/meals/${id}/details`} >Back to Details</Link>


            <h3 className="mx-auto">Update your {oneMeal.name || ''} recipe</h3>
            <form className='col-md-6 mx-auto' onSubmit={editMeal}>
                <div className='form-group'>
                    <label htmlFor="name">Dish Name:</label>
                    <input type="text" name="name" id="name" className="form-control" value={oneMeal.name || ''} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Total Minutes:</label>
                    <input type="number" name="duration" id="duration" className="form-control" value={oneMeal.duration || ''} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="directions">Directions:</label>
                    <input type="text" name="directions" id="directions" className="form-control" value={oneMeal.directions || ''} onChange={changeHandler} />
                </div>
                <button className="btn btn-info mr-3 mt-3">Edit</button>
            </form>
        </div>
    );
};

export default MealEdit;