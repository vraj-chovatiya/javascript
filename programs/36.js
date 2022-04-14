// default parameter
 function addtwo(a,b){
   if(typeof b==="undefined"){
     b = 0;
   }
   return a+b;
 }

 function addtwo(a,b=0){  // second way to define parameters
   return a+b;
 }


 console.log(addtwo(4));