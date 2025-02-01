//(function value)(callback fucntion)

//1)by using anomous function

(function(){
    console.log("this is an IIFE by using anonomous function")
})();

(function(){
    console.log("this is an IIFE by using anonomous function");
})();


//2)by using arrow function

(()=>{
    console.log("this is an IIFE function using arrow function");
})();

//------------------------------------------------------------------------------------------------------------------------------------

//IIFE function by anonomous function with parameters

(function(num1,num2){
    console.log(num1+num2);
    
})(4,5);

(function(num1,num2){
    console.log(`the sum of ${num1} and ${num2} is ${num1+num2}`);
    
})(3,5)

//IIFE functipn by arrow function with parameters

// ((num1,num2)=>{
//     console.log;(`the sum of ${num1} and ${num2} is ${num1+num2}`);
    
// })(3,5);

//-------------------------------------------------------------------------------------------------------------------------------------

//IIFE function by anonomous function with return type

var fun=(function(num1,num2){
    return num1*num2
})(3,5)
console.log(fun);


var fun=(function(num1,num2){
    return num1*num2
})(num1=3,num2=5)
console.log(`the multiplication between ${num1} and ${num2} is ${num1*num2}`);
console.log("the multiply of " +num1+ " and " +num2+ " is " +fun);


//IIFE function by arrow function with return type

var arrfun=((num1,num2)=>{
    return num1-num2
})
(5,3)
console.log(arrfun);

var arrfun=((num1,num2)=>{
    return num1-num2
})
(5,3)
var result=(5,3)
console.log(`the subtraction between ${num1} and ${num2} is ${arrfun}`);





