const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};

const getWorkoutById = (workoutId) => {
    const workout = Workout.getWorkoutById(workoutId);
    return workout;
};

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = { 
        id: uuid(),
        ...newWorkout,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
};

const updateWorkoutById = (workoutId, changes) => {
    const updatedWorkout = Workout.updateWorkoutById(workoutId, changes);
    return updatedWorkout;
};

const deleteWorkoutById = (workoutId) => {
    Workout.deleteWorkoutById(workoutId);
};

module.exports = { getAllWorkouts, getWorkoutById, createNewWorkout, updateWorkoutById, deleteWorkoutById };