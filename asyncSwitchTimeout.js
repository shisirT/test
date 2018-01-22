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


console.log('you are in the programming language info:  ');
abc('java',function(result){
  console.log('your name is: ',result);
});

9851016046
jskisor@gmail.com


