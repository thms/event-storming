const Command = require('../models/command');

exports.list = function (req, res, next ) {
  Command.find({},function (err, commands) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send(commands);
    })

};

exports.show = function (req, res, next ) {
  Command.findById(req.params.id, function (err, command) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send(command);
    })
};

exports.create = function (req, res, next) {
    let command = new Command(
        {
            name: req.body.name,
            xpos: req.body.xpos,
            ypos: req.body.ypos
        }
    );

    command.save(function (err) {
        if (err) {
            return next(err);
        }
        res.header('Access-Control-Allow-Origin', '*')
        res.json(command)
    })
};

exports.update = function (req, res, next) {
    Command.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, command) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send('Command udpated.');
    });
};

exports.delete = function (req, res, next ) {
  Command.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send('Deleted successfully!');
    })
};
