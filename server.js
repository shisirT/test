var http = require('http'); //inbuilt modules
var fs = require ('fs');
var server = http.createServer(function(req,res){
	//http request http response
	//http verb//--get post put delete
	//req is object which holds properties of http request
	//res is object which holds properties of http response
	console.log('req',req.url);
	res.end('you are inside http server created at node');
	/*if (req.url == '/create'){
		res.end('you are in the create page');
	}
	if (req.url == '/rename'){
		res.end('you are at rename page');
			}
	if (req.url == '/'){
		res.end('you are at home page');
	}*/

});


	server.listen(8080,function(err,done){
		if (err){
			console.log('err creating server');
		}else {
			console.log('INNER server listening at port 8080');
		}
	});