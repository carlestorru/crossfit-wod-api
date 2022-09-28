const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = (filterParams) => {
    try {
        const allWorkouts = Workout.getAllWorkouts(filterParams);
        return allWorkouts;
    } catch (error) {
        throw error;
    }
};

const getWorkoutById = (workoutId) => {
    try {
        const workout = Workout.getWorkoutById(workoutId);
        return workout;
    } catch (error) {
        throw error;
    }
};

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = { 
        id: uuid(),
        ...newWorkout,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    try {
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    } catch (error) {
        throw error;
    }
};

const updateWorkoutById = (workoutId, changes) => {
    try {
        const updatedWorkout = Workout.updateWorkoutById(workoutId, changes);
        return updatedWorkout;
    } catch (error) {
        throw error;
    }
};

const deleteWorkoutById = (workoutId) => {
    try {
        Workout.deleteWorkoutById(workoutId);
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllWorkouts, getWorkoutById, createNewWorkout, updateWorkoutById, deleteWorkoutById };