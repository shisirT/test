function greetings(subject,cb){
	var note;

	
	setTimeout(function(){
		switch(subject){
			case'java':
			note={
				message :'teamwork! ! ! '
			}
			break;
			case'python':
			note={
				message:'single! ! !'
				}
			break;
			case 'javaScript':
			note={
				message:'together'
			}
		}
		cb(note);

	},3000);

    
/*    

	setTimeout(function(){

		switch(subject){
			case 'mongodb':
			note={
				message : 'single! ! ! '
			}
		}
		cb(note);
	},5000);
    
    setTimeout(function(){
       switch(subject){
       	case 'express':
       	note={
       		message:'together! ! ! '
       	}
       }
       cb(note);

	},7000);
	
	
*/
}


console.log('you got a message here: ');

greetings('java',function(result){
	console.log('result of above callback',result);
});
greetings('python',function(result){
	console.log('result of above callback',result);
});
greetings('javaScript',function(result){
	console.log('result of above callback',result);
});


/*greetings('python',function(result){
	console.log('python',result)
});

greetings('javaScript',function(result){
	console.log('javaScript',result)
});
*/