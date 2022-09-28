const express = require("express");
const workoutController = require("../../controllers/workoutController");
const recordController = require('../../controllers/recordController');

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getWorkoutById);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateWorkoutById);

router.delete("/:workoutId", workoutController.deleteWorkoutById);

module.exports = router;