var fs = require('fs');
module.exports = function(){


function fsFile(){
fs.writeFile('sample.txt','this is sample for writing file using fs module',function(err,result){
			if (err){
				console.log('err',err);
			} else {
				console.log('file created');
				res.end('file created');
			}
		});
}
function writeFile(){

fs.rename('sample.txt','sample4.txt',function(err,done){
			if (err){
				console.log('err',err);
			else
			   res.end('file rename successful');
			   console.log('console .log file rename success'); 

			})
}
}