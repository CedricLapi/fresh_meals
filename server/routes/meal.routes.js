const MealController = require('../controllers/meal.controller');
 
module.exports = app => {
    app.get('/api/meals', MealController.findAllMeals);
    app.get('/api/meals/:id/details', MealController.findOneSingleMeal);
    app.patch('/api/meals/:id/edit', MealController.updateExistingMeal);
    app.post('/api/meals/new', MealController.createNewMeal);
    app.delete('/api/meals/:id', MealController.deleteAnExistingMeal);
}
