var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json([
    {
    title: "Веб для чайников",
    text: 'Возьмите на работу за еду и сигареты ',
    amount: 5,
    price: 55,
    allSumm: 0,
    }
  ])
});

module.exports = router;
