function hello(note){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			var electricity=true;
			var generator=true;
			if (electricity){
				resolve(note);
			} else if (generator){
				resolve(note);
			} else{
				reject('no electricity');
			}
		},3000);
	});

}

hello('mongodb').then(function(data){
	console.log('welcome',data);
/*}).then(function(date){
	console.log('to ',date);
}).then(function(data){
	console.log('the ',data);
}).then(function(data){
	console.log('world',data);
}).then(function(data){
	console.log('of ',data);
}).then(function(data){
	console.log('web',data);
}).then(function(data){
	console.log('! ! ! ',data);
*/}).catch(function(err){
	console.log('err',err)
});


/*hello('mongodb').then(function(data){
	console.log('data',data);
}).catch(function(err){
	console.log('err',err);
});
*/