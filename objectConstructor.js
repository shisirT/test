function registerStudent(options){
	var obj = {

	}
	obj.name = options.name;
	obj.address = options.address;
	obj.welcome = function (){
		return 'hello ' + this.name + ' welcome to '+ this.address;
	}
	return obj;
}


var shisir = registerStudent({
    name:'shisir Thapa',
    address:'kathmandu'
});

console.log('shisir',shisir.welcome());
//console.log('shisir',shisir.name);
var sita = registerStudent({
	name:'sita thapa',
	address:'pokhara'
});
console.log('sita',sita.welcome());