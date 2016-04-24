var _engine = require('./engine.js');

var create = function(Model, cb) {
  return function(req, res, next) {
  	console.log("\n\n"+JSON.stringify(req.body)+"\n\n");

      _engine.save(Model, req.body, function(err, result) {
          _engine.wrap(res, err, result);
          cb(req, res, next);
      });
  }
}

module.exports = {
    'create': create,
};
