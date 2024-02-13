import React, { useEffect, useState } from 'react'
import {   Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




const MealDashboard = () => {

    
    
    



    const [meals, setMeals] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:8000/api/meals')
            .then(res => setMeals(res.data.meals))
            .catch(err => console.log(err))
    }, [])


    


    //navigate to meal form
    const navigateToMealForm = () => {
        navigate("/api/meals/new")
    }


    //navigate to the meal details
    const navigateToMealDetails = (_id) => {
        navigate(`/api/meals/${_id}/details`)
    }


    

    
  

    
    //Delete a meal
    const deleteMeal = (id) => {
        axios.delete(`http://localhost:8000/api/meals/${id}`)
            .then(res => {
                const filteredMeals = meals.filter(meal => meal._id !== id)
                setMeals(filteredMeals)
            })
            .catch(err => console.log(err))
        }

        //Navigate to  edit meal
        const navigateToEditMeal = (_id) => {
            navigate(`/api/meals/${_id}/edit`)
          }
        
        



  return (
    <div>
        <div>
                    <Link to="/api/meals/new" className="ml-auto">Add a Meal</Link>


        <h3 className='mx-auto'>Find inspiration with these delicious meals!</h3>
        

<table className="col-md-11 mx-auto mt-4">
    <thead>
        <tr>
            <th>Meal</th>
            <th>Prep Time</th>
            
            <th>Options</th>
        </tr>

    </thead>
    <tbody>
        {meals.map((meal) => {
            return (
                <tr key={meal._id}>
                    <td><Link to={`${meal._id}/details`}>{meal.name}</Link></td>
                    <td>{meal.duration}</td>
                    
                    <td>
                        <button className='btn btn-danger' onClick={(e) => deleteMeal(meal._id)}>Delete</button>
                    </td>
                    <td>

                    <button className="btn btn-info mr-3" onClick={(e) => navigateToMealDetails(meal._id)}>Details</button>

                    </td>
                    <td>
                    <button className="btn btn-info mr-3" onClick={(e) => navigateToEditMeal(meal._id)}>Edit</button>

                    </td>
                </tr>
            )
        })}
    </tbody>
</table>
<button className="btn btn-info offset-9 mt-5" onClick={navigateToMealForm}>Create Meal</button>

</div>

</div>

  )
}

export default MealDashboard