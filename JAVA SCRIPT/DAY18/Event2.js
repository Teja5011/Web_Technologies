// function fun()
// {
//     console.log("This is called function");
//     var colour=document.querySelector("input").value;
//     document.body.style.backgroundColor=colour;
// }
// fun();

//--------------------------------------------------------------------------------------------------------------------------------------

// function fun1(){
//     var pass=document.querySelector("input").value;
//     var passlength=pass.length;

//     if(passlength==0)
//     {
//         document.getElementById("result").innerHTML=" ";
    
//     }
//     else if(passlength>=1 && passlength<=5)
//     {
//         document.getElementById("result").innerHTML=" Weak password ";
//         document.getElementById("result").style.color="red";
//     }
//     else if(passlength>=6 && passlength<=8)
//     {
//         document.getElementById("result").innerHTML=" Average password ";
//         document.getElementById("result").style.color="blue";
//     }
//     else if(passlength>8 && passlength<=15)
//     {
//         document.getElementById("result").innerHTML=" Strong password ";
//         document.getElementById("result").style.color="green";
//     }

// }
// fun1();

//--------------------------------------------------------------------------------------------------------------------------------------

function fun2(){
    var pass=document.querySelector("#givenpass").value;
    var cpass=document.querySelector("#conformpass").value;

    if(pass==0 || cpass==0)
    {
        document.getElementById("result").innerHTML="";
    }
    else if(pass==cpass)
    {
        document.getElementById("result").innerHTML="correct password";
        document.getElementById("result").style.color="green";
    }
    else
    {
        document.getElementById("result").innerHTML="wrong password";
        document.getElementById("result").style.color="red";
    }
}
fun2();

