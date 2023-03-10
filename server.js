require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');

// express app
const app = express();

//middleware

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()

})

// route
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to Db', process.env.PORT)
        })
    })
    .catch(err => {
        console.log(err);
    });

