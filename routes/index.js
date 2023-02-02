var express = require('express');
var router = express.Router();

const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs');
});

router.get('/beers', function(req, res, next) {
  punkAPI.getBeers()
  .then((result) => {
    res.render('beers.hbs', {result})
    console.log(result.data);
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/random-beer', function(req, res, next) {
  punkAPI.getRandom()
  .then((result) => {
    res.render('random-beer.hbs', {result})
    //console.log(result);
  })
});

router.get('/beers/:beerid', function(req, res, next) {
  const {beerid} = req.params;
  console.log(beerid);
  punkAPI.getBeer(beerid)
  .then((result) => {
    res.render('onebeer', {result})
    //console.log(result);
  })
});

module.exports = router;
