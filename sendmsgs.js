module.exports = function (details){    
 function greetings(){             var
      body = 'welcome' + ' in broadway infosys Nepal '  + details.name +
          ' is your your name in our account ' + details.address + ' is your adress';
       return body;

    } 
    return {
    	greetings:greetings
    }
};


