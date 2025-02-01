var emp=["TYPE5011","TEJ","ravitejabandla5011@gmail.com",9542607687,4900,"VIJAYAWADA",true]
console.log(emp);

console.log("emp name:"+emp[1]);
console.log("emp address:"+emp[5]);

//-----------------------------------------------------------------------------------------------------------------------------------
// HOW ARRAY IS ITTERABLE

for (i=0;i<=emp.length-1;i++){
    console.log(emp[i]);
}

//--------------------------------------------------------------------------------------------------------------------------------------
//HOW TO CREATE EMPTY ARRAY

var employee=[];
console.log(employee);

employee[0]="TYPE5011";
employee[1]="TEJ";
employee[2]="PRASANNA";
employee[3]="ravitejabandla5011@gmail.com";
console.log(employee);

//--------------------------------------------------------------------------------------------------------------------------------------
//CREATING ARRAY CONSTRUCTOR BY USING NEW KEYWORD

var arr=new Array("RED","BLUE","GREEN","WHITE");
console.log(arr, typeof arr);

//--------------------------------------------------------------------------------------------------------------------------------------
//ARRAY METHODS (types)

//POP(): IT IS USED TO REMOVE ARRAY ELEMENTS FROM LAST

var arr=new Array("RED","BLUE","GREEN","WHITE");
console.log(arr);

arr.pop()
arr.pop()
console.log(arr);

//PUSH(): IT IS USED TO ADD ARRAY ELEMENTS IN THE LAST

var arr=new Array("RED","BLUE","GREEN","WHITE");
console.log(arr);

arr.push("MAGENTA","LAWNGREEN");
arr.push("BLACK","ORANGE");
console.log(arr);

//SHIFT METHOED(): IT REMOVES ARRAY ELEMENTS FROM STARTING

var arr=new Array("RED","BLUE","GREEN","WHITE");
console.log(arr);

arr.shift();
arr.shift();
console.log(arr);

//SHIFT UP METHOD(): IT ADDS ARRAY ELEMENTS FROM STARTING

var arr=new Array("RED","BLUE");
console.log(arr);

arr.unshift("RED","BLUE");
console.log(arr);

//JOIN() & TO STRING(): IT IS USED TO CONVERT ARRAY TO STRING

var arr=new Array("RED","BLUE","GREEN","YELLOW");
console.log(arr);

var str=arr.join("/");
console.log(str);

var str=arr.join("*");
console.log(str);

var str=arr.join(",");
console.log(str);

var str=arr.join("@");
console.log(str);

var tostr=arr.toString(" ");
console.log(tostr);

//REVERSE(): IT REVERSE THE ARRAY ELEMENT

var arr=new Array("HII","HELLO","TEJ");
console.log(arr);

var arr=new Array("HII","HELLO","TEJ");
console.log(arr.reverse());

//REVERSE THE STRING LETTER BY LETTER (TASK-1)

var allInp=document.querySelectorAll("input");
function fun()
{
    var str=allInp[0].value;
    var arr=str.split("");
    var revarr=arr.reverse();
    var revstr=revarr.join("");
    allInp[1].value=revstr;
}














