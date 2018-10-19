const Actor = require('../models/actor');

exports.list = function (req, res, next ) {
  Actor.find({},function (err, actors) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send(actors);
    })

};

exports.show = function (req, res, next ) {
  Actor.findById(req.params.id, function (err, actor) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send(actor);
    })
};

exports.create = function (req, res, next) {
    let actor = new Actor(
        {
            name: req.body.name,
            xpos: req.body.xpos,
            ypos: req.body.ypos
        }
    );

    actor.save(function (err) {
        if (err) {
            return next(err);
        }
        res.header('Access-Control-Allow-Origin', '*')
        res.json(actor)
    })
};

exports.update = function (req, res, next) {
    Actor.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, actor) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send('Actor udpated.');
    });
};

exports.delete = function (req, res, next ) {
  Actor.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send('Deleted successfully!');
    })
};
