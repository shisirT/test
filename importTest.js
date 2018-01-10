var callTest = require ('./test.js');


(function importTest (){
	var name = 'welcome';
	var objDetails = [{
		name: 'guyzz',
		address:'Narga'
	},
	{
		name:'keta haru',
		address:'top of the hill'
	},
	{
		name:'keti haru',
		address: 'gufa bhitra'
	},
	{
		name: 'jhilkey haru',
		address: ' srimatiko ghar ma'
	}];
	objDetails.forEach(function(students)
	{
	  var callingTest = callTest();	
	  console.log(callingTest.greetings(students));
   

	});
    
    
})();
