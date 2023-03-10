const express = require('express');
const {
     createWorkout,
     getWorkout,
     getWorkouts,
     deletWrokout,
     updateWorkout
    } = require('../controllers/workout');

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id',getWorkout)

//POST a new workouts
router.post('/',createWorkout)

//DELETE a new workouts
router.delete('/:id', deletWrokout)
//UPDATE a new workouts
router.patch('/:id',updateWorkout)



module.exports = router;