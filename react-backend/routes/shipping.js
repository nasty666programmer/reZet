var express = require('express');
var router = express.Router();
console.log('1');

let data = {
  name: '',
  address: '',
  phone: '',
  mail: '',
  option: ''
}
/* GET home page. */
router.post('/', function(req, res) {
  data.name = req.body[0];
  data.address = req.body[1];
  data.phone = req.body[2];
  data.mail = req.body[3];
  data.option = req.body[4];
  res.send('Complete');

});

module.exports = router;