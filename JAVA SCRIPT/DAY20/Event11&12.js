function fun(){
    var userGivenColour=document.querySelector("select").value;
    document.body.style.backgroundColor=userGivenColour;
    document.getElementById("result").innerHTML=`i like ${userGivenColour} colour`;
}

function load(){
    document.body.style.backgroundColor="yellow";
}