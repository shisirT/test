function abc(subject,cb){

   var note;
 
   setTimeout(function(){
	switch (subject){
		case 'javaScript ':
		  note = {
			name: 'sen',
			address: 'ktm',
			url: 'https://www.hereicome.com'
		  }
		  break;

		case'mongodb':
		  note = {
			name: 'en',
			address: 'ktm',
			url: 'https://www.hereicome.com'
		  }
		  break;
		case 'nodejs':
		  note = {
			name: 'n',
			address: 'ktm',
			url: 'https://www.hereicome.com'
		  }
		  break;
		default:
		  note = {
			name: 'hello sen',
			address: 'ktm',
			url: 'https://www.hereicome.com'
		  }
	cb(note);
	}
   },3000);
 }
console.log('welcome to the programming');
abc('javaScript',function(result){
	console.log('your programming language is: ', result)

});