class superMarket{
  constructor(options){
    this.productName = options.productName;
    this.productPrice = options.productPrice;
    this.productOrigin = options.productOrigin;
    }
    productStatement(){
      return 'your product name is: '+
    	this.productName+' '+ ' your product price is: '+
    	this.productPrice+' '+ 'orginated from: '+
    	this.productOrigin;
    }

  
}
superMarket.prototype.supermarketName='Bhatbhateni Despartmental Store';
superMarket.prototype.greet = function(){
	return 'you are welcome in '+this.supermarketName;
}

var productInfo = {
	productName:'Himalayan Java Coffee',
	productPrice:'Rs 1000',
	productOrigin:'Nepal'
}

var closureStyle = new superMarket(productInfo);
console.log(closureStyle.productStatement());
console.log(closureStyle.greet());


class furtherMarket extends superMarket{
	constructor(){
		super({});
	}

	moreStatement(){
		console.log('called from parent product statement');
	    return this.supermarketName;
	}
}

var closureSystem = new furtherMarket();
console.log(closureSystem.moreStatement());