function greetings(note,notes,noty){
	return new Promise (function(resolve,reject){
		setTimeout(function(){
			var electricity=false;
			var generator=true;
			var backup=true;
			if (electricity){
				resolve(note);
			} 
			else if(generator){
				resolve('you are using generator');

			}
			else if(backup){
                resolve('are using backup');
			}
			
		},2000);
	});
}

console.log('you are in program : ');

greetings('mongodb').then(function(result){
	console.log('you: ',result);
});

