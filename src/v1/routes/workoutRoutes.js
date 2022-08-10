const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getWorkoutById);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateWorkoutById);

router.delete("/:workoutId", workoutController.deleteWorkoutById);

module.exports = router;