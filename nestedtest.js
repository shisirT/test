function greetings(sub,cb){
	var note;
	setTimeout(function(){
		switch(sub){
			case'java':
			note={
				name:'shisir',
				add:'ktm'
			}
			break;
			case'javaScript':
			note={
				name:'sen',
				add:'lalitpur'
			}
			default:
			note={
				name:'jeevan',
				add:'kathmandu'
			}
			
		}cb(note);
		
	},4000);
}

function greet(notes,printcb){
	var electrictiy=true;
	if(electrictiy){
      printcb(null,notes);
	}else {
		printcb();
	}
}


console.log('you are in the programming lang: ');

greetings('java',function(result){
	console.log('your result is: ',result);
	greet('result',function(err,data){
		if (err){
			console.log('you got an error ',data);
		}else {
			console.log('you dont ve an error ',data);
		}
	})
});

greetings('javaScript',function(result){
	console.log('your result is: ',result);
});
