var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var list = require('../models/list');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




//home list 
 
router.get('/homeList',function(req,res,net){
	list.find({},function(err,docs){
		if(err){
			console.log(err);
			return;
		}
		res.send(docs);
	});
});

//add post

router.post('/addpost',function(req,res,next){
	var data = req.body;
	var times = Date.parse(new Date());
	times = times /1000;
	data.time=times;
 	var addpost = new list();
 	addpost.cont = data.cont;
	addpost.time = data.time;
 	if(data.title == ""){
 		//addpost.title = data.title;
 		res.send({'status' : 491,'msg':'标题不得为空'});
 		return false;
 	}else{
 		addpost.title = data.title;
 	}

 	addpost.save(function(err) {
 		if(err){
 			console.log(err);
 			res.send(err);
 		}
 		console.log('添加成功');
 		res.send('success');
 	});
 	
 

});

module.exports = router;
