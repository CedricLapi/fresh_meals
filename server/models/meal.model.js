const mongoose = require('mongoose');
 
const MealSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Dish name required!"],
        minlength: [3, " Dish name must be at least 3 characters long"],
        maxlength: [20, "Dish name must be at most 20 characters long"]
    },


    duration: {
        type: Number,
        required: [true, "Dish cook time required!"],
        minlength: [2, " Dish cook time must be at least 2 characters long"],
        maxlength: [240, "Dish cook time must be at most 240 characters long"]
    },

    directions: {
        type: String,
        required: [true, "Dish directions required!"],
        minlength: [10, " Direction must be at least 10 characters long"]
    },

    }, { timestamps: true });
 
const Meal = mongoose.model('Meal', MealSchema);
 
module.exports = Meal;
