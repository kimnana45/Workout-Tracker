const { Workout } = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", ({ body }, res) => {
        console.log("Get route works!");
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", ({ body }, res) => {
        console.log("Get range works!");
        Workout.find({})
            .then(range => {
                res.json(range);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        console.log("Post route works!");
        console.log({ body });
        Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log("Put route works!")
        Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
}
