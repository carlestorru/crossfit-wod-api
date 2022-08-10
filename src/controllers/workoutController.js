const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({ status: "OK", data: allWorkouts });
};

const getWorkoutById = (req, res) => {
    const { params: { workoutId } } = req;
    if (!workoutId) {
        return;
    }

    const workout = workoutService.getWorkoutById(workoutId);
    res.send({ status: "OK", data: workout });
};

const createNewWorkout = (req, res) => {
    const { body } = req;

    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };

    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send( { status: "OK", data: createdWorkout });
};

const updateWorkoutById = (req, res) => {
    const updatedWorkout = workoutService.updateWorkoutById();
    res.send("Update an existing workout");
};

const deleteWorkoutById = (req, res) => {
    const deletedWorkout = workoutService.deleteWorkoutById();
    res.send("Delete an existing workout");
};

module.exports = { getAllWorkouts, getWorkoutById, createNewWorkout, updateWorkoutById, deleteWorkoutById };
