//-----------------------------------------(IMPLESTIC TYPE CASTING)-------------------------------------------------------------------
// NUMBER + STRING GIVES STRING
// NUMBER % STRING GIVES NUMBER
// NUMBER == STRING GIVES BOOLEAN
// NUMBER === STRING GIVES BOOLEAN

var num=10;
var str="10";
console.log(num,typeof num);
console.log(str,typeof str);
console.log(num+str,typeof(num+str));
console.log(num%str,typeof(num%str));

//if we use == it considers only values
//if we use === it considers values ass well as data type

console.log(num==str,typeof(num==str));
console.log(num===str,typeof(num===str));


//-------------------------------------------(EXPLICIT TYPE CASTING)-------------------------------------------------------------------
//CONVERSION STRING IN TO NUMBER DATA TYPE
//1)NUMBER()
//2)PARSEINT()
//3)PARSEFLOST()

var str="10";
var num1=Number(str);
console.log(str,typeof str);
console.log(num1,typeof num1);

var str="apple8454";
var num2 =parseInt(str)
console.log(str,typeof str);
console.log(num2,typeof num2);

var str="101.089apple";
var num3=parseFloat(str)

var str="ball101.089apple";
var num4=parseFloat(str);
console.log(str,typeof str);
console.log(num4,typeof num4);

//------------------------------------------------------------------------------------------------------------------------------------
//CONVERSION NUMBER TO STRING DATA TYPE 
//1)STRING()
//2)TO STRING()

var num1=45;
var str=String(num1);
console.log(num1,typeof num1);
console.log(str,typeof str);

var num2=100;
var str=num2.toString();
console.log(num2,typeof num2);
console.log(str,typeof str);

//-------------------------------------------------------------------------------------------------------------------------------------
//CONVERSION BOOLEAN TYPE 
//1)STRING,NUMBER==>BOOLEAN
//2)NULL,NAN,UNDEFINED

var num=4500;                                       //(NAN,TRUE,FALSE,STRING,NULL,UNDEFINED)
var bool=Boolean(num);
console.log(num,typeof num);
console.log(bool,typeof bool);

var str="false";
var bool=Boolean(str);
console.log(str,typeof str);
console.log(bool,typeof bool);




















