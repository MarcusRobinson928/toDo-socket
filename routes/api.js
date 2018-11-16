const db = require('../models');

module.exports = function(app) {

    app.get('/todo', function(req, res) {
        db.ToDo.find({})
            .then(function (dbToDo) {
                res.json(dbToDo);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/todo', function(req, res) {
        db.ToDo.create(req.body)
            .then(function (dbToDo) {
                res.send(dbToDo);
            })
            .catch(function (err) {
                res.json(err);
            });
    }); 
    
    app.delete('/todo/:id', function(req, res) {
        db.ToDo.findOneAndDelete(req.params.id)
        .then(function (dbToDo) {
            res.json(dbToDo);
        })
        .catch(function (err) {
            res.json(err);
        });
    })
};