var callSendMsgs = require ('./sendmsgs.js');

(function importModule(){
	var name = "hello world";

	var objDetails = {
		name:'shisir',
		address:'ktm',
		phone:'9800000'
	};

	var callGreetFn = callSendMsgs(objDetails);

	var viewGreetMsg = callGreetFn.greetings();
	console.log(viewGreetMsg);
})();

//console.log(importModule);