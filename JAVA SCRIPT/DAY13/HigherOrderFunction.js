// HIGHER ORDER FUNCTION AND CALL BACK FUNCTION

// function callback(){
//     statements;
// }
// function higherorder(){
//     statements;
// }
// higherorder(callback);

function fun1(){
    console.log("this a call back function");
}
fun1();
function fun2(callback){
    console.log("this a higher order function");
    callback();
}
fun2(fun1);


//by using anonomous function
var fun1=function(){
    console.log("This is a anonomous call back funtion");
}
fun1();
var fun2=function(callbackfun){
    console.log("This is a anonomous higher order function");
    callbackfun();
}
fun2(fun1);

//by using arrow function
var fun1=()=>{
    console.log("this is arrow call back function");
}
fun1();
var fun2=(callback)=>{
    console.log("this is arrow higher order function"); 
    callback();
}
fun2(fun1);


