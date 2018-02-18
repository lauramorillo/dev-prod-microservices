describe("Api", function() {
  var request = require('request')
  
  it("returns 200 code", function(done) {
    request('http://localhost:3000/users', function(error, response, body) {
      if (error) {
        done.fail(error)
        return
      }
      expect(response.statusCode).toBe(200);
      done()
    })
  });
});
