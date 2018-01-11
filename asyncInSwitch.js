function abc(subject){

   var note;

  //setTimeout(function(){
	switch (subject) {
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
	
	}
	return note;
  //},3000);

}

console.log('start learning programming');
var closureConcept = abc('mongodb');
console.log('hey',closureConcept);