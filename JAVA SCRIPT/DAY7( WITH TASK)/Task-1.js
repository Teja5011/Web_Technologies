var value1=prompt("enter the car name");
var value2=prompt("enter the colour name");

document.getElementById("carname").innerHTML=value1;
document.getElementById("colour").innerHTML=value2;



var carName=prompt("enter the car name");
var carColour=prompt("enter the colour name");

document.getElementById("car").innerHTML=`I LIKE <span style="color:${carColour}">${carName}</span> car in <span style="color:${carColour}">${carColour}</span> colour`;

var a=prompt("enter the car name");
var b=prompt("enter the colour name");
document.getElementById("car").innerHTML=`I LIKE <span style="color:${b}">${a}</span> car in <span style="color:${b}">${b}</span> colour`;


