const Event = require('../models/event');

exports.list = function (req, res, next ) {
  Event.find({},function (err, events) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send(events);
    })

};

exports.show = function (req, res, next ) {
  Event.findById(req.params.id, function (err, event) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send(event);
    })
};

exports.create = function (req, res, next) {
    let event = new Event(
        {
            name: req.body.name,
            xpos: req.body.xpos,
            ypos: req.body.ypos
        }
    );

    event.save(function (err) {
        if (err) {
            return next(err);
        }
        res.header('Access-Control-Allow-Origin', '*')
        res.json(event)
    })
};

exports.update = function (req, res, next) {
    Event.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, event) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send('Event udpated.');
    });
};

exports.delete = function (req, res, next ) {
  Event.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send('Deleted successfully!');
    })
};
