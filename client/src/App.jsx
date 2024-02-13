

import { Route, Routes } from 'react-router-dom'
import './App.css'
import MealForm from './components/MealForm'
import MealDashboard from './components/MealDashboard'
import MealDetails from './components/MealDetails'
import MealEdit from './components/MealEdit'

function App() {
  

  return (
    <>
    <h1>Speedy Meals</h1>
      <Routes>
        
        <Route element={<MealForm />} path="/api/meals/new" />
        <Route element={<MealDashboard />} path="/api/meals" />
        <Route element={<MealDetails />} path="/api/meals/:id/details" />
        <Route element={<MealEdit />} path="/api/meals/:id/edit" />



      </Routes>
    </>
  )
}

export default App
