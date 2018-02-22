var express = require('express');
var router = express.Router();

var users = function(usersProvider) {
  /* GET users listing. */
  router.get('/', function(req, res, next) {
    usersProvider((error, body) => {
      if (error) {
        console.error(error)
        res.sendStatus(500)
        return
      }
      res.send(body);
    })
  });
  return router
}

module.exports = users;
