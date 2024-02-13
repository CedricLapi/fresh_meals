const Meal = require('../models/meal.model');
 
module.exports.findAllMeals = (req, res) => {
    Meal.find()
        .then((allDaMeals) => {
            res.json({ meals: allDaMeals })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSingleMeal = (req, res) => {
    Meal.findOne({ _id: req.params.id })
        .then(oneSingleMeal => {
            res.json({ meal: oneSingleMeal })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewMeal = (req, res) => {
    Meal.create(req.body)
        .then(newlyCreatedMeal => {
            res.json({ meal: newlyCreatedMeal })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingMeal = (req, res) => {
    Meal.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedMeal => {
            res.json({ user: updatedMeal })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingMeal = (req, res) => {
    Meal.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
