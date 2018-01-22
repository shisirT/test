function travel(option){
  this.name = option.name;
  this.country = option.country;
  this.city = option.city;
  this.travelling = function(){
  	return 'you are travelling to '+this.name + ' '+ '.country name :  '+this.country;
  }
}

travel.prototype.hotel='Hotel Pokhara';
travel.prototype.greet=function(){
	return 'you are at '+this.hotel + ' '+
	'your task is to do '+ this.task;
}


var travelInfo = new travel ({
	name:'Pokhara',
	country:'Nepal',
	city:'Kaski'
});

function greetings(options){
  this.task = options.task;

}

greetings.prototype.welcome = 'welcome';
greetings.prototype = new travel({
	name:'Lalitpur',
	country:'Nepal'
})

var TravelInheritance = new greetings({
   task:'trekking'
})

console.log('man at last: ',TravelInheritance.travelling());
console.log('man at last: ', TravelInheritance.greet());




//console.log('Check',travelInfo.travelling());
//console.log('Check',travelInfo.greet());







/*function greetings(options){
	this.name = options.name;
	this.address = options.address;
	this.welcome = function(){
		return this.name +' '+ this.address+' '+
		this.place
	}
}
	greetings.prototype.place = 'Nepal';
	greetings.prototype.greet = function(){
		return 'welcome' + ' '+this.place;
	}


var callGreet = new greetings({
	name:'sen',
	address:'kathmandu',

});

console.log('hey',callGreet.welcome());
console.log('hi',callGreet.greet());

*/



/*function greetings(options){
     this.firstName = options.firstName;
     this.lastName = options.lastName;
     this.getName = function(){
     	return 'welcome '+this.firstName+' '+this.lastName;
     }

        
}
greetings.prototype.place='pokhara';


var shisir = new greetings({
     	firstName:'shisir',
     	lastName:'Thapa'
     });


console.log('hey',shisir.getName());
*/