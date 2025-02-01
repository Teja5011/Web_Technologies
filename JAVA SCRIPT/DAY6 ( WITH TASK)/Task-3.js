var num1=prompt("ENTER UR num1");
var num2=prompt("ENTER UR NUM2");
var type=prompt("ENTER UR OPERATION TYPE");

switch (operation)
 {
    case "add":
        document.getElementById("text").innerHTML="THE ADDITION BETWEEN "+num1+" and "+num2+" is "+(Number(num1)+Number(num2));
        break;

    case "sub":
        document.getElementById("text").innerHTML="THE SUBTRACTION BETWEEN "+num1+" and "+num2+" is "+(num1-num2);
        break;

    case "mul":
        document.getElementById("text").innerHTML="THE MULTIPICATION BETWEEN "+num1+" and "+num2+" is "+(num1*num2);
        break;

    case "div":
        document.getElementById("text").innerHTML="THE DIVISION BETWEEN "+num1+" and "+num2+" is "+(num1num2);
        break;

    case "mod":
        document.getElementById("text").innerHTML="THE MODULUS BETWEEN "+num1+" and "+num2+" is "+(num1%num2);
        break;

    case "inc":
        document.getElementById("text").innerHTML="THE INCREMENT BETWEEN "+num1+" and "+num2+" is "+(num1**num2);
        break;

    default:
        document.getElementById("text").innerHTML="INVALID INPUT";
        break;
}
