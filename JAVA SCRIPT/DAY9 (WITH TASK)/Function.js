//NAMED FUNCTION

// SYNTAX: function functionName(){
//                                statments;
//                                }
//                                 functionName();


function wedding(){
    console.log("end of boys life, so life is better without marrage, stay single");
}
wedding();
//-------------------------------------------------------------------------------------------------------------------------------------

// function with arguments (or) function with parameters
// SYNTAX: function functionName(para1,para2,.......,paraN){
//                                statments;
//                                }
//                                 functionName(arg1,arg2,......,argN);

function add(num1,num2){
    console.log(num1+num2);
    console.log(`THE ADDITION BETWEEN ${num1} and ${num2} is ${num1+num2}`);
}
add(3,9);
//-------------------------------------------------------------------------------------------------------------------------------------

// function with return type
// SYNTAX: function functionName(para1,para2,.......,paraN){
//                                statments;
//                                return type;
//                                }
//                                 functionName(arg1,arg2,......,argN);
//                                 statements;


function sub(num1,num2) {
    console.log(`THE SUBTRACTION BETWEEN ${num1} and ${num2} is ${num1-num2}`);
    return num1-num2;
}
sub(5,2);

function sub(num3,num4){
    return num3-num4
}
console.log(sub(10,2));

function sub(num1,num2){
    return num1-num2
}
(sub(num1=5,num2=2))
console.log(`THE SUBTRACTION BETWEEN ${num1} and ${num2} is ${num1-num2}`);
//-------------------------------------------------------------------------------------------------------------------------------------

















