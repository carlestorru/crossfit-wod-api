const express = require("express"); 

/* Body parser */
//npm i body-parser
//const bodyParser = require("body-parser");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

/* It's able to use body-parser or express json middleware for pass the data in req body 
I will be using express json middleware
*/

//app.use(bodyParser.json());

app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});