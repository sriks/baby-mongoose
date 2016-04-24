var _ = require('underscore');

var wrap = function(res, err, result) {
    if (err) {
     res.locals.error = err;
    } else {
     res.locals.result = result;
    }
}

var _fillWithData = function(Model, data) {
    var dataObj = new Model;
    _.each(data, function(value, key) {
      dataObj.set(key, value);
    });
    return dataObj;
}

var save = function(Model, data, cb) {
    var toSave = _fillWithData(Model, data);
    toSave.save(function(err, savedObj) {
        cb(err, savedObj);
    });    
}

var findById = function(Model, _id, cb) {
    Model.findOne({'_id':theId}, function(err, result) {
        cb(err, result);
    });
}

var findAll = function(Model, limit, cb) {
    Model.find({},{'limit': limit}, function(err, result) {
        cb(err, result);
    });
}

//foo.api.com/v1/something/className/:_id
//foo.api.com/v1/something/className?<query>
//foo.api.com/v1/something/class  - returns top 20 results

var readFromRequest = function(Model, cb) {
    
    return function(req, res, next) {
      var className = req.path;
      var routePath = req.route.path;
      var paths = req.route.path.split('/');

      if(!_.isEmpty(req.query)) {
          console.log("find by query");


      }

      else if(_.last(paths).charAt(0) === ':') {
        var theId = _.last(paths);
        theId = theId.replace(":","");
        console.log("id name"+theId);
        theId = req.params[theId];
        console.log("find by id "+theId);
        Model.findOne({'_id':theId}, function(err, theObj) {
          console.log("found "+JSON.stringify(theObj));
        });
      }

      else {
        console.log("find all");
      }
    }
}
module.exports = {
    'wrap': wrap,
    'save': save
}