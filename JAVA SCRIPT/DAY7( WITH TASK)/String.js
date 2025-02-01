// (i) BY USING LITERALS('', " " ): STRING CAN BE CREATED BY USING SINGLE QUOTE OR DOUBLE QUOTE. IN THE STRING,
// 1. WE CANNOT PERFORM MULTIPLE STRING.
// 2. WE CANNOT HAVE MULTIPLE SINGLE QUOTE OR DOUBLE QUOTE
// 3. WE CANNOT PERFORM STRING INTERPOLATION

var str="we cannot write multiline over here.";
console.log(str);

var str="whenever we enclosed 'string' with double quotes, we cannot use multiple 'double' quotes inside it, but we can use multile 'single quotes'.";
console.log(str);

var str='whenever we enclosed "string" with single quotes, we cannot use multiple "single" quotes inside it, but we can use single "double quotes".';


//-----------------------------------------------------------------------------------------------------------------------------------
//(ii) BY USING STRING CONSTRUCTORS:

// 1. WE CANNOT PERFORM MULTIPLE STRING.
// 2. WE CANNOT HAVE MULTIPLE SINGLE QUOTE OR DOUBLE QUOTE
// 3. WE CANNOT PERFORM STRING INTERPOLATION

var str=String("we can 'create' string by using 'constructor'.");
console.log(str);

var str=String('we can "create" string by using "constructor".');
console.log(str);

//-------------------------------------------------------------------------------------------------------------------------------------
//(iii) BY USING TEMPLETE LITERALS:  THIS IS PERFORMED BY USING BACKTICK

// 1. IN TEMPLATE LITERALS WE CAN HAVE MULTIPLE STRING.
// 2. WE CANNOT HAVE MULTIPLE SINGLE QUOTE OR DOUBLE QUOTE
// 3. WE CANNOT PERFORM STRING INTERPOLATION ${}.

var str=`"Twinkele,twinke", little star,
How i wonder "what" you are!
up 'above' the world so high ,
like a 'diamond' in the 'sky'.`
console.log(str);

var num1=49;
var num2=45;
console.log("THE SUM OF "+num1+" and "+num2+" is "+(Number(num1)+Number(num2)));


var num1=49;
var num2=45;
console.log(`THE SUM OF ${num1} AND ${num2} IS ${num1+num2}`);

//-------------------------------------------------------------------------------------------------------------------------------------
//STRING INTERPOLATION

console.log(`this is a object and function ${Math.random()}`);
console.log(`tis is today's day,date and time ${Date()}`);



