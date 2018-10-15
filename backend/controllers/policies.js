const Policy = require('../models/policy');

exports.list = function (req, res, next ) {
  Policy.find({},function (err, policies) {
        if (err) return next(err);
        res.send(policies);
    })

};

exports.show = function (req, res, next ) {
  Policy.findById(req.params.id, function (err, policy) {
        if (err) return next(err);
        res.send(policy);
    })
};

exports.create = function (req, res, next) {
    let policy = new Policy(
        {
            name: req.body.name,
            order: 1
        }
    );

    policy.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('policy created successfully')
    })
};

exports.update = function (req, res, next) {
    Policy.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, policy) {
        if (err) return next(err);
        res.send('Policy udpated.');
    });
};

exports.delete = function (req, res, next ) {
  Policy.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
