const Policy = require('../models/policy');

exports.list = function (req, res, next ) {
  Policy.find({},function (err, policies) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send(policies);
    })

};

exports.show = function (req, res, next ) {
  Policy.findById(req.params.id, function (err, policy) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send(policy);
    })
};

exports.create = function (req, res, next) {
    let policy = new Policy(
        {
            name: req.body.name,
            xpos: req.body.xpos,
            ypos: req.body.ypos
        }
    );

    policy.save(function (err) {
        if (err) {
            return next(err);
        }
        res.header('Access-Control-Allow-Origin', '*')
        res.json(policy)
    })
};

exports.update = function (req, res, next) {
    Policy.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, policy) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.json(policy);
    });
};

exports.delete = function (req, res, next ) {
  Policy.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*')
        res.send('Deleted successfully!');
    })
};
