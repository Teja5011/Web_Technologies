var n1=prompt("ENTER NUM1");
var n2=prompt("ENTER NUM2");
var type=prompt()

if (operation=="+") 
{
    let result=num1+num2
    document.getElementById("text").innerHTML="THE ADDITION BETWEEN "+num1+" and "+num2+" is "+(Number(num1)+Number(num2));
}

else if (operation=="-")
{
    let result=num1-num2
    document.getElementById("text").innerHTML="THE ADDITION BETWEEN "+num1+" and "+num2+" is "+(Number(num1)-Number(num2));  
} 
else
{
    document.getElementById("text").innerHTML="invalid input";
}

