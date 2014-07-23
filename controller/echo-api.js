// Arquivo responsável por nossa api
var app = require('../lib/server').app;
var json = require('body-parser').json;

app.route('/api/v1/echo')
    .get(function(req, res, next){
        res.json({hello: 'world', method: req.method});
    })
    .post(json(), function(req, res, next){
        res.json(req.body);
    })
    .put(json(), function(req, res, next){
        res.json(req.body);
    })
    .delete(function(req, res, next){
        res.json({hello: 'world', method: req.method});
    });
