function greetings(sub){
	return new Promise(function(resolve,reject){
		var note;
		setTimeout(function(){
			switch(sub){
				case'java':
				note={
					name:'sen'
				}
				break;
				case'javaScript':
				note={
					name:'shi'
				}
				break;
				case'python':
				note={
					name:'names'
				}
				default:
				note={
					name:'your name pls'
				}
            
			}
			resolve(note);
			
		},3000);
	});
}

function greet(note){
	return new Promise(function(resolve,reject){
		console.log('you provide note for print');
		var name='welcome';
		setTimeout(function(){
			
			if(name){
				resolve(name);
			}else {
				reject('you are in wrong side. ');
			}

		},3000);
	});
}

function wishes(){
	return new Promise(function(resolve,reject){
		console.log('you are wishing');
		var naming='birthday';
		setTimeout(function(){
			
			if(naming){
				resolve(naming);
			}
			else{
				reject('you are wrong in naming. ');
			}
		});
	});
}


console.log('you are here baby! ! ! : ');

greetings('java').then(function(result){
	console.log('result',result);
	return greet('shisir');
}).then(function(printedNote){
	console.log('printedNote',printedNote);
	return wishes();

}).then(function(refreshmentEnd){
  console.log('refreshmentEnd',refreshmentEnd);	
}).catch(function(err){
	console.log('err>>',err);
})
console.log('you are in asynchronize version');







