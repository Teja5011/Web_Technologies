//ARROW FUNCTION

// SYNTAX:

// var variable_name=()=>{
//                     statments;
//                       }
//                       variable_name;

var arrrow=()=>{
    console.log("THIS IS A ARROW FUNCTION");
}
arrrow();

//IF WE HAVE ONLY ONLY ONW STATEMENT THERE IS NO NEED OF BLOCK ELEMENT
var arrrow=()=>
    console.log("THIS IS AN ARROW FUNCTION, WITHOUT BLOCK");
arrrow(); 

var arrrow=num1=>
    console.log(`THIS IS AN ARRROW FUNCTION, WITHOUT PArenthesis AND BLOCK AND THE VALUE IS ${num1}`);
arrrow(45);



//ARROW FUCTION WITH PARAMETERS
// SYNTAX:

// var variable_name=(para1,para2,.............,paraN)=>{
//                     statments;
//                       }
//                       variable_name(arg1,arg2,.............,argN);

//IF WE HAVE MULTIPLE PARAMENTERS WE NEED TO USE PARANTHESIS COMPULSORY

var arr=(num1,num2)=>
    console.log(`THIS SUM OF ${num1} and ${num2} IS ${num1+um2}`);
arr(4,6);



//ARROW FUNCTION WIH RETURN TYPE
// SYNTAX:

// var variable_name=(para1,para2,.............,paraN)=>{
//                     statments;
//                       }
//                       variable_name(arg1,arg2,.............,argN);

//WHENEVER WE USE RETURN TYPE , IT IS MANDATORY TO USE BLOCK

var arr1=(num1,num2)=>{
    return num1*num2
}
console.log(`THIS RETURN TYPE WITH  FUNCTION WITH IS `+$arr1(4,8));









    