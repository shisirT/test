function RegisterStudent(options){
	this.name = options.name;
	this.address = options.address;
	this.welcome = function (){
		return 'hello ' + this.name + ' welcome to '+ this.address;
	}
	
}

RegisterStudent.prototype.nationality = 'nepali';
RegisterStudent.prototype.greetings = function(){
	return 'hello ' + this.name + ' welcome to '+
    this.address + ' you are welcomed Mr. '	+ this.nationality
}
//prototype means to add

var shisir = new RegisterStudent({
    name:'shisir Thapa',
    address:'kathmandu'
});

console.log('shisir',shisir.greetings());


