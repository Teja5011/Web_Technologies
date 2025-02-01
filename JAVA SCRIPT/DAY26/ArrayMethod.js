// index in i && index of i
var colour=["red","yellow","green","orange","blue","white"];
console.log(colour);

for(i in colour)
{
    console.log(i);         
    
}

for(i of colour)
{
    console.log(i);
    
}

//----------------------------------------------------------------------------------------------------------------------------------------
//keys()

var arrItterator=colour.keys();
var arrItterator=colour.values();
var arrItterator=colour.entries();

for(i of arrItterator)
{
    console.log(i);
    
}

//--------------------------------------------------------------------------------------------------------------------------------------
//SOME()

var arr=[2,5,8,6,15,33,99];
console.log(arr);

var val=arr.some(function(arr)
{
    return arr%2==0;
})
console.log(val);

//--------------------------------------------------------------------------------------------------------------------------------------
//EVERY()

var arr1=[3,5,81,11,17,99]
console.log(arr);

var val1=arr1.every(function(arr1)
{
    return arr1%2==0;
})
console.log(val1);

//---------------------------------------------------------------------------------------------------------------------------------------
//FIND(): TO FIND THE ELEMENT IN THE ARRAY

var colour=["red","yellow","green","orange","blue","white"];
console.log(colour);

var search=colour.find(function(colour){
    return colour=="white";
})
console.log(search);

var search1=colour.find(function(colour)
{
    return colour=="magenta";
})
console.log(search1);

//-------------------------------------------------------------------------------------------------------------------------------------
//FIND INDEX ()

var colour=["red","yellow","green","orange","blue","white"];
console.log(colour);

var findIndex=colour.findIndex(function(colour){
    return colour=="blue";
})
console.log(findIndex);

var findIndex=colour.findIndex(function(colour){
    return colour=="magenta";
})
console.log(findIndex);













