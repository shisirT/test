function greetings(subject,cb){
  var note;

  setTimeout(function(){
    switch(subject){
    	case 'greetings':
    	  note = {
    	  	message : 'welcome to Nepal'
    	  }
    	break;
    	case 'wishes' :
    	note = {
    	  	message : 'Happy Birthday to you!'
    	  }

    	break;

    	case 'order' :
    	note = {
    	  	message : 'Please be seated here.'
    	  }
    }
     cb(note);
  },3000);

}



greetings('greetings',function(result){
	console.log('', result);
});

greetings('wishes',function(result){
	console.log('',result)
});

greetings('order',function(result){
	console.log('',result)
});

console.log(' Greet! Greet ! ! Greet ! ! ! ')