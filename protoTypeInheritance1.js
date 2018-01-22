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


function Students(options){
	this.roomNo = options.roomNo;
}

Students.prototype = new RegisterStudent({
	name:'new man',
	address:'new place'
})

Students.prototype.phoneNumber = 100;

var newName = new Students({
	roomNo:'lab-no-10'
});

console.log(newName); //empty object
console.log(newName.phoneNumber());//100

console.log('result',newName.greetings());

