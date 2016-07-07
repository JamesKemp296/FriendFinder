var friendData 		= require('../data/friends.js');
var path 			= require('path');
var bodyParser = require('body-parser');


module.exports = function(app){

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.text());
	app.use(bodyParser.json({type:'application/vnd.api+json'}));

	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

	app.post('/api/tables', function(req, res){
		console.log(req);

		if(tableData.length < 5 ){
			tableData.push(req.body);
			res.json(true); // KEY LINE
		}

		else{
			waitListData.push(req.body);
			res.json(false); // KEY LINE
		}

	});

	app.post('/api/clear', function(req, res){
		// Empty out the arrays of data
		friendData = [];
		

		console.log(friendData);
	})
}