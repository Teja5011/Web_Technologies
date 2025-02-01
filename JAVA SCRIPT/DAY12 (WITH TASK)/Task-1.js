//BY USING ARROW FUNCTION WITH RETURN TYPE, CALCULATE THE AREA OF SHADED PART??

var areaTri=(base,height)=>{
    return 0.5*base*height;
}
var triArea=areaTri(8,12);
console.log(`AREA OF TRIANGLE IS ${triArea}`);

var areaSqu=side=>{
    return side*side
}
var squArea=areaSqu(8);
console.log(`AREA OF SQUARE IS ${squArea}`);

var areaRect=(length,breadth)=>{
    return length*breadth;
}
var rectArea=areaRect(12,8);
console.log(`AREA OF RECTANGLE IS ${rectArea}`);

var totalArea=side=>{
    return side*side
}
var areaTotal=totalArea(20);
console.log(`TOTAL AREA IS ${areaTotal}`);

var shadedArea=areaTotal-rectArea-squArea-rectArea;
console.log(`SHADED AREA IS ${shadedArea}`);


//WE FUNCTION TO FIND POSITIVE EVEN OR ODD NUMBER, COLLECT THE VALUE FROM THE USER

var num1=prompt("enter the number");
console.log(num1);

if (num1%2==0)
{
    console.log("positive number");
}
else if(num1%2==1)
{
    console.log("odd number");
}
else
{
    console.log("invalid input,please enter a valid number ");
    
}


var num=prompt("enter the number");
var positiveNum=()=>{
    if(num>0)
    {
        if (num%2==0)
        {
            console.log(`even number: ${num}`);   
        }
        else 
        {
            console.log(`odd number: ${num}`);
        }
    }
    else
    {
        console.log(`THIS IS NEGATIVE NUMBER: ${num}`);
        
    }
}


