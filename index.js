var simple = require('./simple.js');
var middleware = require('./middleware.js');

module.exports = {
    'simple': simple,
    'middleware': middleware,
}

//var _ = require('underscore');
//var _engine = require('./engine.js');
//
//var _wrap = function(res, err, result) {
//  if (err) {
//     res.locals.error = err;
//  } else {
//     res.locals.result = result;
//  }
//}
//
////foo.api.com/v1/something/className/:_id
////foo.api.com/v1/something/className?<query>
////foo.api.com/v1/something/class  - returns top 20 results
//
//var read = function(Model, cb) {
//
//    return function(req, res, next) {
//      var className = req.path;
//      var routePath = req.route.path;
//      var paths = req.route.path.split('/');
//
//      if(!_.isEmpty(req.query)) {
//        console.log("find by query");
//      }
//
//      else if(_.last(paths).charAt(0) === ':') {
//        var theId = _.last(paths);
//        theId = theId.replace(":","");
//        console.log("id name"+theId);
//        theId = req.params[theId];
//        console.log("find by id "+theId);
//        Model.findOne({'_id':theId}, function(err, theObj) {
//          console.log("found "+JSON.stringify(theObj));
//        });
//      }
//
//      else {
//        console.log("find all");
//      }
//    }
//}
//
//var create = function(Model, cb) {
//  return function(req, res, next) {
//      _engine.save(Model, req.body, function(err, result) {
//          _wrap(res, err, result);
//          cb(req, res, next);
//      });
//  }
//}
//
////var create = function(Model, cb) {
////  return function(req, res, next) {
////    var toSave = new Model;
////    var body = req.body;
////    _.each(body, function(value, key) {
////      toSave.set(key, value);
////    });
////
////    toSave.save(function(err, newObj) {
////      _wrap(res, err, newObj);
////      console.log("res.locals:"+JSON.stringify(res.locals));
////      cb(req, res, next);
////    });
////  };
////}
//
//module.exports = {
//  'create': create,
//  'read': read,
//};
