module.exports = function (){
	var a = 'hello';

	function getName(){
		return a;
	}
	function setName(b){
        a = b;
	}
	function hey(){
		var c = 'wass up'
	}

	return {
		getName:getName,
		setName:setName,
		hey:hey
	}

};

