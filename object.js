/*
objects*/

/* objects are container which have key-value pair
  key value pair is also call name value pair*/

 /*property method*/

 /*way to call objects 

    var obj={} //object literal method

    var newobj = new obj() //object constructor method.

   */

   var obj = {  
     23:'abc' }
   obj.name = 'broadway';
   obj.address = 'tinkune';
   obj.welcome = function(){
   	  return this.name + ' '+this.address;
   }

  //if we need to call name only
  console.log(obj.name) //broadway 
  
  //console.log(obj[name]); (we can also call)
  

  console.log(obj['23']);
  //console.log(obj.23); //makes an issue

  //how to delete name only
  delete obj.name 

  