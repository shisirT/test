module.exports = function (){
	function greetings(details){
		return 'welcome to hell ' + details.name + ' . '+details.address + ' is your address.';
	}
	return {
		greetings:greetings
	};
};

