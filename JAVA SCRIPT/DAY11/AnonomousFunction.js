// SYNTAX:

// var variable_name=function(){
//                          statments;
//                              }
//                          variable_name();


var fun=function(){
    console.log("this is a namesless function");
}
fun();

//------------------------------------------------------------------------------------------------------------------------------------
//FUNCTION WITH PARAMETERS

// var variable_name=function(para1,par2,....,paraN){
//                                             statments;
//                                                 } 
//                                                 variable_name(arg1,arg2,...,argN);
//                                                                      statments;                                              


var add=function(num1,num2){
    console.log(`the sum of ${num1} and ${num2} is ${num1+num2}`);
}
add(3,9);

//-----------------------------------------------------------------------------------------------------------------------------------
//FUNCTION WITH RETURN TYPE

// var variable_name=function(para1,par2,....,paraN){
//                                             statments;
//                                             return statments
//                                                 } 
//                                                 variable_name(arg1,arg2,...,argN);        

var add=function(num1,num2){
    return num1+num2;
}
console.log(add(3,9));


var add=function(num1,num2){
    return num1+num2;
}
console.log(add(num1=3,num2=9));
console.log(`the sum of ${num1} and ${num2} is ${num1+num2}`);


var sub=function(num1,num2){
    return num1-num2;
}
console.log(sub(num1=3,num2=9));
console.log(`the sum of ${num1} and ${num2} is ${num1-num2}`);


var multi=function(num1,num2){
    return num1*num2;
}
console.log(multi(num1=3,num2=9));
console.log(`the sum of ${num1} and ${num2} is ${num1*num2}`);


var div=function(num1,num2){
    return num1/num2;
}
console.log(div(num1=3,num2=9));
console.log(`the sum of ${num1} and ${num2} is ${num1/num2}`);


var exp=function(num1,num2){
    return num1**num2;
}
console.log(exp(num1=3,num2=9));
console.log(`the exp of ${num1} and ${num2} is ${num1**num2}`);

var add,sub=function(num1,num2){
    return num1+num2;
    return num1-num2;
}
console.log(add(num1=3,num2=9));
console.log(sub(num1=3,num2=9));
console.log(`the add of ${num1} and ${num2} is ${num1+num2}`);
console.log(`the sum of ${num1} and ${num2} is ${num1-num2}`);





