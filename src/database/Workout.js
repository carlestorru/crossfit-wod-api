const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
    try {
        return DB.workouts;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getWorkoutById = (workoutId) => {
    try {
        const workout = DB.workouts.find((workout) => workout.id === workoutId);
        if (!workout) {
            throw { status: 400, message: `Can't find workout with id ${workoutId}` };
        }
        return workout;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const createNewWorkout = (newWorkout) => {
    try {
        const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
        if (isAlreadyAdded) {
            throw { status: 400, message: `Workout with the name ${newWorkout.name} already exists` };
        }
        
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const updateWorkoutById = (workoutId, changes) => {
    try {
        const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
        if (isAlreadyAdded) {
            throw { status: 400, message: `Workout with the name ${newWorkout.name} already exists` };
        }

        const indexToUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId);
        if (indexToUpdate === -1) {
            throw { status: 400, message: `Can't find workout with id ${workoutId}` };
        }

        const updatedWorkout = {
            ...DB.workouts[indexToUpdate],
            ...changes,
            updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        };
        
        DB.workouts[indexToUpdate] = updatedWorkout;
        saveToDatabase(DB);
        return updatedWorkout;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
    
};

const deleteWorkoutById = (workoutId) => {
    try {
        const indexToDel = DB.workouts.findIndex((workout) => workout.id === workoutId);
        if (indexToDel === -1) {
            throw { status: 400, message: `Can't find workout with id ${workoutId}` };
        }

        DB.workouts.splice(indexToDel, 1);
        saveToDatabase(DB);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
    
};

module.exports = { getAllWorkouts, getWorkoutById, createNewWorkout, updateWorkoutById, deleteWorkoutById };