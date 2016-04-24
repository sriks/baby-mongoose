var _engine = require('./engine.js');

var create = function(Model) {
    return function(req, res, next) {
        _engine.save(Model, req.body, function(err, result) {
            res.locals.result = result;
            res.locals.err = err;
            next();
        });
    }
}

module.exports = {
    'create': create
}