class restaurants{
	constructor(option){
		this.name = option.name;
		this.address = option.address;
		this.contactNumber = option.contactNumber;
	}

	allNames(){
		return this.name +' '+ this.address + 
		' '+this.contactNumber
	}


}


var obj = {
	name:'2nd Home restaurant and bar',
	address:'New Baneswore',
	contactNumber:'223322'
}


var closureStyle = new restaurants (obj);
console.log(closureStyle.allNames());






















/*class travellers {

	constructor(option){
		this.firstName = option.firstName;
		this.currentAddress = option.currentAddress;
		this.travellingAddress = option.travellingAddress;

	}
	travelDairy(){
		return 'our ' +this.firstName +' from '+this.currentAddress +' travelling to '+this.travellingAddress;
	}
}

var obj ={
	firstName:'sen',
	currentAddress:'ktm',
	travellingAddress:'usa'
}

var closureStyle = new travellers(obj);
console.log(closureStyle.travelDairy());

*/




/*class Students{
	constructor(option){
		this.firstName = option.firstName;
		this.lastName = option.lastName;
	}
	fullName(){
		return this.firstName+' '+this.lastName;
	}

}


var obj = {
	firstName:'sen',
	lastName:'ktm'
}


var closureStyle = new Students(obj);
console.log(closureStyle.fullName());


*/


/*class students{
	constructor(option){
		this.firstName = option.firstName;
		this.lastName = option.lastName;
	}

	fullName(){
		return this.firstName+' '+this.lastName;
	}

}


var obj={
	firstName:'sen',
    lastName:'ktm'
}

var object={
	firstName:'shisir',
	lastName:'kathmandu'
}


var closureStyle = new students(object);
console.log(closureStyle.fullName());
*/


/*class Students{
	constructor(option){
		this.firstName = option.firstName;
		this.lastName = option.lastName;
	}

	fullName(){
		return this.firstName +' '+this.lastName;
	}
}

var obj ={
	firstName:'sen',
	lastName:'ktm'
}

var sen = new Students(obj);
console.log(sen.fullName());
*/







