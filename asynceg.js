
function timeOne(){
 
    function timeOutFn(){
      
       setTimeout(function(){
      
      	  console.log('hey man wass up,how u doin');
      
        },3000);

    }

    function abc(){
		var man =  "Welcome to Nodejs! ! !";
		return man;
    }
	

	 return {
	 	callTimeOut:timeOutFn,
	 	abc:abc,
	 }

    
};


var closureCall = timeOne();
console.log(closureCall.abc());
console.log(closureCall.callTimeOut());