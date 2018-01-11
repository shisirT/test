function abc (){
	
	 var hello  = "hello! welcome to Nepal!!!"
	
	function def(){
      return hello;
	}

	function cgcg(){
		 man = "hey man wass up";
		 woman=  "hey how u doin";
		 return man;
		 return woman;
		 	
	}
	
	function timeOutFn(){
      setTimeout(function(){
      	console.log("def>>",def())
      	
      },3000);
	
	}
	
	function jkl(){
        return "goodnight baby";
       
	}
	
	return {
		def:def,
		jkl:jkl,
		cgcg:cgcg,
		callTimeOut:timeOutFn
	}
	
};

var closureCall = abc();
console.log(closureCall.cgcg());
console.log(closureCall.def());
console.log(closureCall.jkl());
console.log(closureCall.callTimeOut());