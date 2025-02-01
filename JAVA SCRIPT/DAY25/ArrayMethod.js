//FILTER():IT IS ONE OF THE HIGHER ORDER FUNCTION WHICH IS USED TO FILTER THE ARRAY ELEMENTS BASED ON CONDITION.
var age=[5,9,55,18,65,88,31,22,45,23,100,60,65,80];
console.log(age);

// I WANT TO FILTER THE AGE BETWEEN 18 TO 60

var newAge=age.filter(function(age){
    return age>=18 && age<=60
})
console.log(newAge);

//FILTER OUT ONLY EVEN AGES IN ARRAY?

var age=[5,9,55,18,65,88,31,22,45,23,100,60,65,80];
console.log(age);

var evenAges=age.filter (function(age){
    return age%2==0
}) 
console.log(evenAges);

//FILTER OUT ONLY ODD AGES IN ARRAY?

var age=[5,9,55,18,65,88,31,22,45,23,100,60,65,80];
console.log(age);

var oddAges=age.filter(function(age){
    return age%2==1
})
console.log(oddAges);

//FILTER THE COLOUR NAMES WHICH IS LESS THAN FIVE CHARACTER?

var colour=["red","orange","white","blue","pink","magenta","gray","skyblue"]
console.log(colour);

var filcolour=colour.filter(function(colour){
    return colour.length<5
})
console.log(filcolour);

//FILTER THE COLOUR NAMES WHICH IS LESS THAN FIVE CHARACTER (USING ARROW FUNCTION)?

var colour=["red","orange","white","blue","pink","magenta","gray","skyblue"]
console.log(colour);

var filtercolour=colour.filter((colour)=>{
    return colour.length<5
})
console.log(filtercolour);

//FILTER UN WANTED DATA FROM ARRAY?

var arr=["red","green",undefined,"blue",undefined,"orange","yellow",true,"gray",NaN,"pink","purple",null]
console.log(arr);

var filearr=arr.filter(function(arr){
    return (typeof arr)=="string"
})
console.log(filearr);


//-------------------------------------------------------------------------------------------------------------------------------------

// MAP(): 

var arrnum=[2,5,,8,4,67,54,88,100,34,67,32,99]
console.log(arrnum);

var addnum=arrnum.map(function(arrnum){
    return arrnum+20
})
console.log(addnum);


//ADD COLOUR WORD TO THE ARRAY IN EVERY ELEMENT

var arrcolour=["red","blue","green","orange"]
console.log(arrcolour);

var addcolour=arrcolour.map(function(arrcolour){
    return arrcolour+" colour "
})
console.log(addcolour);


// CONVERT ODD NUMBER TO EVEN NUMBER, BUT NO CHANGE EVEN NUMBER

var arrnum=[1,2,3,4,7,5,9,13,16,66,55,83,95,43,27]
console.log(arrnum);

var evenarr=arrnum.map(function(arrnum){
   if(arrnum%2==0)
    {
        return arrnum
   }
   else
   {
        return arrnum+1
   }    
})
console.log(evenarr);

//-------------------------------------------------------------------------------------------------------------------------------------
// SLICE(): BY USING , WE CAN CREATE NEW ARRAY FROM EXISTING ARRAY

var colour=["red","green","blue","orange","yellow","gray","pink","purple"]
console.log(colour);

var newArr=colour.slice(0,4)
console.log(newArr);   //positive index

var newArr=colour.slice(-4,-1)
console.log(newArr);  //negative index

//--------------------------------------------------------------------------------------------------------------------------------------
//SPLICE(): IT REMOVES/SELECTS CERTAIN AMOUNT OF ELEMENTS

var colour=["red","green","blue","orange","yellow","gray","pink","purple"]
console.log(colour);

var removeEle=colour.splice(0,1);
console.log(removeEle);


var removeEle=colour.splice(1,2);
console.log(removeEle);


var removeEle=colour.splice(1,6);
console.log(removeEle);

//--------------------------------------------------------------------------------------------------------------------------------------
// INDEX OF() & LAST INDEX OF()

var colour=["red","green","red","blue","red","orange","red","yellow","gray","pink","purple","red"]
console.log(colour);

console.log(colour.indexOf("red"));
console.log(colour.indexOf("red",1));
console.log(colour.indexOf("red",3));
console.log(colour.indexOf("red",6));
console.log(colour.indexOf("red",4));


console.log(colour.lastIndexOf("red",2));
console.log(colour.lastIndexOf("red",4));

//--------------------------------------------------------------------------------------------------------------------------------------
// FLAT(): IT CONCATENATES SUB ARRAY

var arr=[1,2,3,[4,5,6],7,2,1,[8,9,1["a","b"]],[5,4,2,[4,5,6,["subarray"]]]]
console.log(arr);

var arr1=arr.flat(1);
var arr2=arr.flat(2);
var arr3=arr.flat(3);
var arr4=arr.flat(Infinity);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);



 






    

