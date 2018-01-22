function abc (subject,cb){

   var note;

 setTimeout(function(){
  switch (subject){
    case 'java':
       note = {
       	course:'java a hardest language'
       }
       break;
    case 'c' :
      note = {
      	course:'c is the more hardest language'
      }

   
   }
   cb(note);
   
   },3000);
}

function printNote(note,printcb){
	var electricity = true;

	if(electricity){

		printcb(null,note);
	}
	else{
		printcb('no electrictiy');
	}
}


console.log('you are in the programming language info:  ');
abc('java',function(result){
  console.log('your name is: ',result);
  printNote('result',function(err,data){
  	if (err){
  		console.log('error in printing note',err);
  	}else {
  		console.log('print success');
  	}
  })
});

abc('c',function(result){
	console.log('your name is: ',result);
});