//functional constructor equivalent to class
// constructor is a function that initiates an object




function RegisterStudent(options){
	this.name = options.name;
	this.address = options.address;
	this.welcome = function (){
		return 'hello ' + this.name + ' welcome to '+ this.address;
	}
	
}


var shisir = new RegisterStudent({
    name:'shisir Thapa',
    address:'kathmandu'
});

console.log('shisir',shisir.welcome());
//console.log('shisir',shisir.name);
var sita = new RegisterStudent({
	name:'sita thapa',
	address:'pokhara'
});
console.log('sita',sita.welcome());