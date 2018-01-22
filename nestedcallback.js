function greetings(subject,cb){
	var note;
	setTimeout(function(){
		switch(subject){
          case'java':
          note={
          	name:'shisir',
          	address:'thamel'
          }
          default:
          note={
          	name:'sen',
          	address:'ktm'
          }
		cb(note)
		}

		
	},3000);
}

function greet(notes,printcb){
  var electricity= true;

  setTimeout(function(){
  	if(electricity){
  		printcb(null,notes);
  	}else{
  		printcb('no electricity');
  	}
  },7000);
}

function refreshment(refreshcb){
	setTimeout(function(){
      
      refreshcb('start preparing');	
	
	},3000)
	
}

console.log('you are awesome: ');

greetings('java',function(result){
	console.log('your name is: ', result);
	greet('result',function(err,data){
		if (err){
			console.log('you are not success',err);
		}else{
			console.log('you are success',data);
		    refreshment(function(finished){
              console.log('go for study');
		    });
		}
	});
});


console.log('you got a result');