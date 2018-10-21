var express = require('express');

module.exports = function(app) {
  var router = express.Router();

  router.get('/', function (req, res) {
    res.send('Your Todo List');
  });

router.post('/', function (req, res) {
  if(req.body.name) {
    res.send(`${req.body.name} is added to your list!\n`);
  } else {
    res.status(400);
    res.send('Expecting a JSON object with a "name" property.\n');
  }
});

  app.use(express.json());
  app.use("/list", router);
}
