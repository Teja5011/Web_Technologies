function fun(){
    var valueFromUser=document.getElementById("inp").value;
    document.getElementById("result").innerHTML=`I LIKE ${valueFromUser} colour`
    document.body.style.backgroundColor=valueFromUser;
}

// ------------------------------------------------------------------------------------------------------------------------------------

function fun1(){
    var valueFromUser1=document.getElementById("inp1").value;
    document.getElementById("result1").innerHTML=`I LIKE ${valueFromUser1} colour`
    document.body.style.backgroundImage=`linear-gradient(${valueFromUser1})`;
    document.body.style.width="100%";
    document.body.style.height="100vh";
}

//-------------------------------------------------------------------------------------------------------------------------------------

