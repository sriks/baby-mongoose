var assert = require('better-assert');
var should = require('should'); 
var _ = require('underscore');
var url = 'http://localhost:3001'
var request = require("supertest")

describe('CRUD', function() {

      
before(function(done) {
    request = request(url);
    done();
});

describe('Create', function() {
    
    var checkCreationResponse = function(err, res) {
        if (err) {
            throw err;
        }

        // Check that the result is as expected.
        var body = res.body;
        console.log(JSON.stringify(body));
        body.should.have.property('_id');
        _.each(input, function(value, key) {
            body[key].should.equal(input[key]);
        });
    }
    
    var input;
    before(function(done) {
        input = {'name': 'a test user', 'age': 21, 'verified': false};
        done();
    });
      
    it('a simple handler', function(done) {
        request
        .post('/simple/users')
        .send(input)
        .expect('Content-Type', 'application/json')
        .expect(201)    
        // end handles the response
        .end(function(err, res) {
            checkCreationResponse(err, res);
            done();
        });
    });
    
    it('a middleware handler', function(done) {
        request
        .post('/middleware/users')
        .send(input)
        .expect('Content-Type', 'application/json')
        .expect(201)
        .end(function(err, res) {
            checkCreationResponse(err, res);
            done();
        });
    });
    
});
    
describe('Read', function() {
    
    
});

});

    