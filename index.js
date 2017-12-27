
var hello = 'hello';

function greetings(name){
	var greetword = 'welcome'

	function sayHello(place){
    	var innerFunctionWord = 'inner word';
    	return hello + " "+ name +" " + greetword +" "+'to' +" "+place;
    }
    return sayHello;

}

var callOuterFn = greetings('shisir'); //outer function called

console.log(callOuterFn('nodejs!')); //inner function called