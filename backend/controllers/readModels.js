const ReadModel = require('../models/readModel');

exports.list = function (req, res, next ) {
  ReadModel.find({},function (err, readModels) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send(readModels);
    })

};

exports.show = function (req, res, next ) {
  ReadModel.findById(req.params.id, function (err, readModel) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send(readModel);
    })
};

exports.create = function (req, res, next) {
    let readModel = new ReadModel(
        {
            name: req.body.name,
            xpos: req.body.xpos,
            ypos: req.body.ypos
        }
    );

    readModel.save(function (err) {
        if (err) {
            return next(err);
        }
        res.header('Access-Control-Allow-Origin', '*')
        res.json(readModel)
    })
};

exports.update = function (req, res, next) {
    ReadModel.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, readModel) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send('ReadModel udpated.');
    });
};

exports.delete = function (req, res, next ) {
  ReadModel.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send('Deleted successfully!');
    })
};
