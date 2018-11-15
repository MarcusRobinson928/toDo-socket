const db = require('../models/todo');

module.exports = function(app) {

    app.get('/todo', function(req, res) {
        db.find({})
            .then(function (dbToDo) {
                res.json(dbToDo);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/todo', function(req, res) {
        db.create(req.body)
            .then(function (dbToDo) {
                res.send(dbToDo);
            })
            .catch(function (err) {
                res.json(err);
            });
    }); 
    
    app.delete('/todo/:id', function(req, res) {
        db.remove(req.params.id)
        .then(function (dbToDo) {
            res.json(dbToDo);
        })
        .catch(function (err) {
            res.json(err);
        });
    })
};