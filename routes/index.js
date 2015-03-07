var express = require('express');
var router = express.Router();
var dummyData= require('../models/data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search/:whateverLang', function(req, res){
  // console.log('REQ DOT PARAMS',req.params);
  var searching = req.params.whateverLang;
  var searchObj = {};
  // console.log('dummyData::::::::', dummyData);
  // function that searches through dummyData here, then send result.
  for(key in dummyData.programming){
    console.log('KEY . DOT . DESC',key.desc);
    if(key === searching){
      console.log('DUMMYYYYYYY',dummyData.programming[key]);
      var found = true;

      var objSend = {
        key: key,
        description: dummyData.programming[key].desc,
      }

      res.send(objSend);

    }
  }
  if(!found){res.send('sorry, not found');}
  
});

module.exports = router;
